import React, { useState } from 'react'
import Axios from 'axios'

function Graph() {



    const [data, setData] = useState('')

    const getData = () => {

        Axios.get("http://localhost:/3001/getdata", (req, res) => {
            const company = req.body.company;
            const date = req.body.dateValue;

        })

        Axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=AAPL&apikey=MANY9Q89QQ1O3AV1").then((response) => {
            console.log(response)
            setData(response.data)
        })


    }






  return (
    <div>graph
        
        <button onClick={getData}>Get data</button> 
        
    </div>
  )
}

export default Graph;