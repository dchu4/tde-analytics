Rails.application.routes.draw do
  mount  ActionCable.server => '/cable'

  get '/' => 'pages#index'
  get '/pages/products' => 'pages#products'
  get '/pages/users' => 'pages#users'
  get '/pages/locations' => 'pages#locations'
  get '/pages/visits' => 'pages#visits'
  get '/pages/purchases' => 'pages#purchases'

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

  namespace :api do
    namespace :v1 do
      get '/charts' => 'charts#index'
      get '/visits' => 'charts#visits'
      get '/locations' => 'charts#locations'
      get '/products' => 'charts#products'
    end
  end
end
