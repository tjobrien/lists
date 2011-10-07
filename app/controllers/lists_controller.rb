class ListsController < ApplicationController
  def index
    @lists = List.all
  end

  def show
    @list = List.find(params[:id])
    
  end

  def new
    @list = List.new
    4.times { @list.list_items.build }
  end

  def create
    @list = List.new(params[:list])
    if @list.save
      redirect_to @list, :notice => "Successfully created list."
    else
      render :action => 'new'
    end
  end

  def edit
    @list = List.find(params[:id])
  end

  def update
    @list = List.find(params[:id])
    if @list.update_attributes(params[:list])
      redirect_to @list, :notice  => "Successfully updated list."
    else
      render :action => 'edit'
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    redirect_to lists_url, :notice => "Successfully destroyed list."
  end
end
