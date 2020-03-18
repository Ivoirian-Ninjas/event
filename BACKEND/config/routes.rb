Rails.application.routes.draw do
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
  post '/places/:id/book', to: 'places#book'
  post '/bookings/:id/confirm', to: 'bookings#confirm'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
