require 'sinatra'
require 'haml'

get '/' do
	'Hello world!'
end

get '/pass' do
  haml :password
end