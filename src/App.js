import React from 'react'
import Info from "./Components/info"
import Form from "./Components/form"
import Weather from "./Components/weather"

const API_KEY = ""

export default class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
      e.preventDefault()
      const city = e.target.elements.city.value

      if(city) {
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        const data = await api_url.json()
        console.log(data)

        let sunset = data.sys.sunset
        let date = new Date()
        date.setTime(sunset)
        let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" +date.getSeconds()

        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          pressure: data.main.pressure,
          sunset: sunset_date,
          error: undefined
      })
      } else {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          sunset: undefined,
          error: "Enter the City"
        })
        
      }
      
  }

  render() {
    return (
      <div className='wrapper'>
        <div className="main">
        <div className="container">
          <div className="row">
          <div className="col-xs-5">
            <Info />
          </div>
          <div className="col-xs-7">
            <Form weatherMethod={this.gettingWeather} />
            <Weather 
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              pressure={this.state.pressure}
              sunset={this.state.sunset}
              error={this.state.error}
            />
          </div>
        </div>
        </div>
        </div>
        
      </div>
    )
  }
}
