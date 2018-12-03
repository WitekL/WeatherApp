class WeatherController < ApplicationController
  def current_weather
    weather = WeatherApi.new(params[:city]).call

    render json: weather
  end
end
