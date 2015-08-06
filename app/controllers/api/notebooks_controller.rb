class Api::NotebooksController < ApplicationController 

	def index
		@notebooks = current_user.notebooks.includes(:notes)
		render json: @notebooks 
	end

	def show
		@notebook = Notebook.find(params[:id])
		if @notebook 
			render json: @notebook 
		else
			render json: ["No Notebook"], status: 422
		end
	end

	def create
		@notebook = current_user.notebooks.new(notebook_params)
		if @notebook.save
			render json: @notebook 
		else
			render json: @notebook.errors.full_messages, status: :unprocessable_entity
		end
	end

	def update
		if @notebook && @notebook.update(notebook_params)
			render json: @notebook 
		else
			render json: @notebook.errors.full_messages, status: :unprocessable_entity
		end
	end

	def destroy
		@notebook = Notebook.find(params[:id])
		if @notebook 
			@notebook.destroy 
			render json: {}
		end
	end

	private

	def notebook_params
		params.require(:notebook).permit(:title)
	end


end