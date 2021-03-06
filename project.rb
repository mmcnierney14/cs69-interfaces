require 'sinatra'
require 'haml'
require 'maruku'
require 'sinatra/activerecord'
require './config/environments'
require './models/password_data'
require './models/autocomplete_data'

get '/' do
	'Hello world!'
end

get '/password' do
  version = params[:v] || 0
  
  if version == "1"
    survey_link = "https://www.surveymonkey.com/s/password_restriction"
  elsif version == "2"
    survey_link = "https://www.surveymonkey.com/s/settingpassword"
  else
    survey_link = "https://www.surveymonkey.com/s/passwordsetting"
  end
  
  haml :password, :format => :html5, :locals => { :survey_link => survey_link }
end

get '/password_welcome' do
  version = params[:description] || "0"
  if params[:description] == "1"
    file = File.open("descriptions/good_description.md", "r")
    description = Maruku.new(file.read).to_html
  elsif params[:description] == "2"
    file = File.open("descriptions/bad_description.md", "r")
    description = Maruku.new(file.read).to_html
  else
    description = ""
  end
  
  haml :password_welcome, :format => :html5, :locals => { :description => description, :version => version }
end

post '/password_data' do
  @password_data = PasswordData.new(params[:password_data])
  if !@password_data.save
    "Sorry, there was an error!"
  end
end

post '/autocomplete_data' do
  @autocomplete_data = AutocompleteData.new(params[:autocomplete_data])
  if !@autocomplete_data.save
    "Sorry, there was an error!"
  end
end

get '/autocomplete' do
  haml :autocomplete
end

get '/thanks' do
  haml :thanks
end

get '/newspaper' do
  haml :newspaper
end