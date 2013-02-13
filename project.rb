require 'sinatra'
require 'haml'

get '/' do
	'Hello world!'
end

get '/password' do
  haml :password
end