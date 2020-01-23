Rails.application.routes.draw do
  resources :service_offereds
  resources :images
  resources :favorite_places
  resources :places
  resources :reviews
  resources :users
  post '/users/login' ,to: 'users#login'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
