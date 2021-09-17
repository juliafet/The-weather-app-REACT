import React from 'react'

const today = new Date()

let date_today = today.getUTCDate()
let month = today.getUTCMonth()
let month_today = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]


var options = { weekday: 'short'};
let week_day = new Intl.DateTimeFormat('en-US', options).format(today);


const Info = () => (
    <div>
        <h2>The Weather App</h2>
        <p>Today {week_day} {date_today} {month_today[month]}</p>
    </div>
)

export default Info