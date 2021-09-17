import React from 'react'
import Info from "./Components/info"
import Form from "./Components/form"
import Weather from "./Components/weather"

const API_KEY = "95e86e24254bb4c4bdf4acbb6ac7a5aa"
export default class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    clouds: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
      e.preventDefault()
      const city = e.target.elements.city.value

      if(city) {
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        const data = await api_url.json()
        console.log(data)

        let sunset = data.sys.sunset
        let date = new Date()
        date.getTime(sunset)
        let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          clouds: data.clouds.all,
          sunset: sunset_date,
          error: undefined
      })
      } else {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          clouds: undefined,
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
          <div className="col-sm-5 info">
            <Info />
          </div>
          <div className="col-sm-7 form">
            <Form weatherMethod={this.gettingWeather} />
            <Weather 
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              clouds={this.state.clouds}
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
