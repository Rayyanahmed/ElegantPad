class Api::NotesController < ApplicationController

	def index
		@notes = current_user.notes 
		render json: @notes 
	end

	def show
		@note = Note.find(params[:id])
		if @note 
			render json: @note 
		end
	end

	def create
		@note = Note.new(note_params)
		if @note.save
			render json: @note 
		else
			render json: @note.errors.full_messages, status: :unprocessable_entity
		end
	end

	def update
		@note = Note.find(params[:id])
		if @note && @note.udpate(note_params)
			render json: @note 
		else
			render json: @notes.errors.full_messages, status: :unprocessable_entity
		end
	end

	def destroy
		@note = Note.find(params[:id])
		@note.destroy
		render json: {}
	end

	private

	def note_params
		params.require(:note).permit(:title, :content, :notebook_id)
	end

end