import React from 'react'
import Chart from './chart'

export default function Analytics_modal(props) {
    const analytics = props.place.analytics.filter(e => e.year == (new Date).getFullYear() )
    let data  = (attr, type, color) => [ {
        "id": type,
        "color": "rgb(204, 0, 255)",
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
        <div className="div_modal_analytics">
          <button onClick={props.close_modal} className="close_modal_analytics">
             X
          </button>
            <p className="title_modal_analytics">Your statistics</p>
            <div>
                {analytics && analytics.length !== 0 && <h3 className="step_modal_chart">{analytics[analytics.length - 1].number_view} views this month</h3> }
                <Chart data={data('number_view', 'Views', 'rgb(204, 0, 255)')} x_legend={(new Date).getFullYear()} y_legend='Views' />
            </div>

            <div>
                 {analytics && analytics.length !== 0 && <h3 className="step_modal_chart">{analytics[analytics.length - 1].people_booked} people booked {props.place.name} this month</h3> }
                 <Chart data={data('people_booked', 'Appointments','rgb(204, 0, 255)')} x_legend={(new Date).getFullYear()} y_legend='Number of booking' />
            </div>

            <div>
                {analytics && analytics.length !== 0 && <h3 className="step_modal_chart">{analytics[analytics.length - 1].people_booked} people booked {props.place.name} this month</h3> }
                <Chart data={data('num_cancelation', 'Cancellations','rgb(204, 0, 255)')} x_legend={(new Date).getFullYear()} y_legend='Number of cancellation' />
            </div>

        </div>
    )
}
