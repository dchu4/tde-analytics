class ProductsController < ApplicationController
  def index
    @products = Product.all.order(:id)
  end

  def new
  end

  def create
    Product.create(
        product_number: params[:product_number], 
        product_name: params[:product_name], 
        retailer: params[:retailer], 
        url: params[:url]
      )
  end

  def show
  end

  def destroy
    product = Product.find(params[:id])
    product.destroy
  end
end
