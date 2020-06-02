import React from 'react'
import Chart from './chart'

export default function Analytics_modal(props) {

   const  modal_styles = {
       height: '90%',
    'overflow-y': 'auto',
        width: "70%",
        maxWidth: "100%",
        margin: "0 auto",
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "29999",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 0px 400px rgba(0, 0, 0, 0.40)",
    }
    const analytics = props.place.analytics.filter(e => e.year == (new Date).getFullYear() )
    let data  = (attr, type, color) => [ {
        "id": type,
        "color": "hsl(187, 70%, 50%)",
        "data": [
          {
            "x": "January",
            "y": (() => { const analytic = analytics.find(e => e.month === 1) ; return analytic ? analytic[attr]: 0} )()
          },
          {
            "x": "February",
            "y": (() => { const analytic = analytics.find(e => e.month === 2) ; return analytic ? analytic[attr] : 0})()
          },
          {
            "x": "March",
            "y":( () => { const analytic = analytics.find(e => e.month === 3) ; return analytic ? analytic[attr] : 0})()
          },
          {
            "x": "April",
            "y":  (() => { const analytic = analytics.find(e => e.month === 4) ; return analytic ? analytic[attr] : 0})()
          },
          {
            "x": "May",
            "y":( () => { const analytic = analytics.find(e => e.month === 5) ; return analytic ? analytic[attr] : 0})()
          },
          {
            "x": "Jun",
            "y":(  () => { const analytic = analytics.find(e => e.month === 6) ; return analytic ? analytic[attr] : 0})()
          },
          {
            "x": "July",
            "y":( () => { const analytic = analytics.find(e => e.month === 7) ; return analytic ? analytic[attr] : 0})()
          },
          {
            "x": "August",
            "y": ( () => { const analytic = analytics.find(e => e.month === 8) ; return analytic ? analytic[attr] : 0})()
          },
          {
            "x": "Septemper",
            "y": ( () => { const analytic = analytics.find(e => e.month === 9) ; return analytic ? analytic[attr] : 0})()
          },
          {
            "x": "October",
            "y":( () => { const analytic = analytics.find(e => e.month === 10) ; return analytic ? analytic[attr]: 0})()
          },
          {
            "x": "November",
            "y": ( () => { const analytic = analytics.find(e => e.month === 11) ; return analytic ? analytic[attr]: 0})()
          },
          {
            "x": "December",
            "y": ( () => { const analytic = analytics.find(e => e.month === 12) ; return analytic ? analytic[attr]: 0})()
          }
        ]
      }]
    return (
        <div style={{...modal_styles}}>
        <button onClick={props.close_modal} className="close_modal">
                    <i className="far fa-times-circle"></i> 
          </button>
            <div>
                {analytics && analytics.length !== 0 && <h3>{analytics[analytics.length - 1].number_view} views this month</h3> }
                <Chart data={data('number_view', 'Views', 'rgb(202, 121, 224)')} x_legend={(new Date).getFullYear()} y_legend='Views' />
            </div>

            <div>
                 {analytics && analytics.length !== 0 && <h3>{analytics[analytics.length - 1].people_booked} people booked {props.place.name} this month</h3> }
                 <Chart data={data('people_booked', 'Appointments','rgb(176, 252, 131)')} x_legend={(new Date).getFullYear()} y_legend='Number of Booking' />
            </div>

            <div>
                {analytics && analytics.length !== 0 && <h3>{analytics[analytics.length - 1].people_booked} people booked {props.place.name} this month</h3> }
                <Chart data={data('num_cancelation', 'Cancelations','rgb(255, 65, 13)')} x_legend={(new Date).getFullYear()} y_legend='Number of Cancelation' />
            </div>

        </div>
    )
}
