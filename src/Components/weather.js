import React from 'react'

const Weather = (props) => (
        <div className="infoWeath">
                { props.city && 
                    <div>
                        <p>{props.city},  {props.country}</p>
                        <p>{props.temp} °C</p>
                        <p>Clouds: {props.clouds} %</p>
                        <p>Sunset: {props.sunset}</p>
                    </div>
                }
                <p className="error">{props.error}</p>
            </div>
    )

export default Weather 

/* export default class Weather extends React.Component {
    render () {
        return (
            <div>
                { this.props.city && 
                    <div>
                        <p>Location: {this.props.city},  {this.props.country}</p>
                        <p>Temperature: {this.props.temp  / 32}</p>
                        <p>Pressure: {this.props.pressure}</p>
                        <p>Sunset: {this.props.sunset}</p>
                    </div>
                }
                <p>{this.props.error}</p>
            </div>
        )
    }
} */

