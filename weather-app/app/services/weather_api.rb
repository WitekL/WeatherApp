class WeatherApi
  # both token and api_endpoint should be stored in ENV variables
  # http://api.openweathermap.org/data/2.5/
  API_ENDPOINT = 'http://api.openweathermap.org'.freeze
  TOKEN = 'ad46873043deb8cfd273ebacca6b5a9f'.freeze

  def initialize(city)
    @city = city
  end

  def call
    JSON.parse request(@city).body
  end

  private

  def request(city)
    client.get('/data/2.5/weather', { q: city, APPID: TOKEN })
  end

  def client
    Faraday.new(url: API_ENDPOINT)
  end
end
