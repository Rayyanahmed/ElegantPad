class Api::TagsController < ApplicationController
	def index
		@tags = current_user.tags
		render json: @tags 
	end

	def show
		@tag = Tag.find(params[:id])
		if @tag 
			render :show 
		else
			render json: ['Unknown tag'], status: 404
		end
	end

	def create
		@tag = Tag.new(tag_params)
		@tag.user = current_user
		if @tag.save
			render json: @tag 
		else
			render json: @tag.error.full_messages, status: :unprocessable_entity
		end
	end

	def update
		@tag = Tag.find(params[:id])
		if @tag && @tag.update(tag_params)
			render json: @tag 
		else
			render json: @tag.errors.full_messages
		end
	end

	def destroy
		@tag = Tag.find(params[:id])
		@tag.destroy
		render json: {}
	end

	private 

	def tag_params
		params.require(:tag).permit(:title)
	end
end