Rails.application.routes.draw do
  resources :activities
  resources :conversations
  resources :categories
  resources :amenities
  resources :rules
  resources :cards
  resources :messages
  resources :bookings
  resources :service_offereds
  resources :images
  resources :places
  resources :reviews
  resources :users
  post '/users/login' ,to: 'users#login'
  get '/places/s/:terms', to: 'places#index'
  post '/places/:id/book', to: 'places#book'
  post '/bookings/:id/confirm', to: 'bookings#confirm'
  mount ActionCable.server => '/cable'
  get '/listing/:id', to: 'places#index'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
