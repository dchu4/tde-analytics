class PurchasesController < ApplicationController
  def create
    Purchase.create(
        product_id: params[:product_id],
        quantity: params[:quantity],
        color: params[:color],
        cost: params[:cost]
      )
  end
end
