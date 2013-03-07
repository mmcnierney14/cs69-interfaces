require 'sinatra'
require 'haml'
require 'sinatra/activerecord'
require './config/environments'
require './models/password_data'

get '/' do
	'Hello world!'
end

get '/password' do
  haml :password, :format => :html5
end

post '/password_data' do
  @password_data = PasswordData.new(params[:password_data])
  if !@password_data.save
    "Sorry, there was an error!"
  end
end

get '/autocomplete' do
  haml :autocomplete
end

get '/newspaper' do
  haml :newspaper
end