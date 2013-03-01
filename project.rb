require 'sinatra'
require 'haml'

get '/' do
	'Hello world!'
end

get '/password' do
  haml :password, :format => :html5
end

post '/password_data' do
  # get sanitized input
  username = params[:username].gsub(/\W+/, "")
  password = params[:password].gsub(/\W+/, "")
  
  # write to file
  open("./data/password-data.txt", "a") do |f|
    f.puts "username: #{username}\t\t password: #{password}\n"
  end
end

get '/autocomplete' do
  haml :autocomplete
end

get '/data' do
  data = IO.read("./data/password-data.txt")
  data
end

get '/newspaper' do
  haml :newspaper
end