class ProductsController < ApplicationController
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

  def destroy
    product = Product.find(params[:id])
    product.destroy
  end
end
