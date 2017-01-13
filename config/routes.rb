Rails.application.routes.draw do
  mount  ActionCable.server => '/cable'

  get '/' => 'pages#index'
  get '/product_charts' => 'pages#product_charts'
  get '/user_charts' => 'pages#user_charts'
  get '/location_charts' => 'pages#location_charts'
  get '/visit_charts' => 'pages#visit_charts'
  get '/purchase_charts' => 'pages#purchase_charts'

  get '/visits' => 'visits#index'
  post '/visits' => 'visits#create'
  get '/visits/:id' => 'visits#show'

  post '/users' => 'users#create'
  get '/users/:id' => 'users#show'

  get '/products' => 'products#index'
  get '/products/new' => 'products#new'
  post '/products' => 'products#create'
  get 'products/:id' => 'products#show'
  delete '/products/:id' => 'products#destroy'

  post '/purchases' => 'purchases#create'

  get '/pages/product_page_views' => 'pages#product_page_views'
  namespace :api do
    namespace :v1 do
      get '/charts/product_page_views' => 'charts'
    end
  end
end
