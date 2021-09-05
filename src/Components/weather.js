import React from 'react'

const Weather = (props) => (
        <div>
                { props.city && 
                    <div>
                        <p>Location: {props.city},  {props.country}</p>
                        <p>Temperature: {props.temp  / 32}</p>
                        <p>Pressure: {props.pressure}</p>
                        <p>Sunset: {props.sunset}</p>
                    </div>
                }
                <p>{props.error}</p>
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

