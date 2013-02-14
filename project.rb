require 'sinatra'
require 'haml'

get '/' do
	'Hello world!'
end

get '/password' do
  haml :password
end

get '/autocomplete' do
  haml :autocomplete
end

get '/newspaper' do
  haml :newspaper
end