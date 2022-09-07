
import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts'


export default function VesselHorizontalBar(props) {

  const vsatData = props.data;

  const [category, setCategory] = useState([])
  const [data, setData] = useState([])
  const [color, setColor] = useState([])
  const [id, setId] = useState([])



  useEffect(() => {
    const vslName = [];
    const vslResponse = [];
    const vslColor = [];
    const vslCode = [];


    vsatData.map(e => {
      vslName.push(e.ship_name.toUpperCase());
      vslCode.push(e.ship_code)
      vslResponse.push(e.latency)
      e.connection === 'VSAT'
        ? vslColor.push('#1fd3a0')
        : e.connection === 'FBB'
          ? vslColor.push('#0f79e9')
          : e.connection === '4G'
            ? vslColor.push('#ffce56')
            : vslColor.push('#c10909');
    })

    setCategory(vslName)
    setData(vslResponse)
    setColor(vslColor)
    setId(vslCode)

  }, [vsatData])

  return (

    <div >
      <Chart options={{
        chart: {
          id: id
        },
        plotOptions: {
          bar: {
            // distributed: true, // this line is mandatory
            borderRadius: 1,
            horizontal: true,
          }
        },


        fillColor: color,
        // colors: color,
        title: {
          text: 'Latest Ping Response'
        },
        xaxis: {
          categories: category
        }
      }}
        series={[{
          name: 'series-1',
          data: data
        }]} type="bar" height={800} />
    </div>
  )

}
