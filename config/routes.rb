Rails.application.routes.draw do
  get '/' => 'visits#index'
  get '/visits' => 'visits#index'
  post '/visits' => 'visits#create'
  get '/visits/:id' => 'visits#show'

  post '/users' => 'users#create'
  get '/users/:id' => 'users#show'

  get '/products/new' => 'products#new'
  post '/products' => 'products#create'
  delete '/products/:id' => 'products#destroy'
end
