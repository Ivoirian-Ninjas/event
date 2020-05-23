import React, { Component } from 'react'

export default class Step1 extends Component {
    render() {
        return (
            <div className='PageConteneur' >
                <div className="book_div_left">
                    <h1 className="title_book_step1">Acknowledge Rules</h1>
                    <br />
                    <h3 className="date_time_book">
                        Time :  {parseInt(this.props.duration)} hours in&nbsp;
                                {this.props.place.attributes && this.props.place.attributes.name}
                    </h3> 
                    <h3 className="date_time_book dates_book"> Date : {this.props.string_date}</h3>
                    {/**Display message based on place activities and analytics */}
                    <div className='dynamicMessage'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    {/** Display the owner's rules */}
                    <h2 className="warning_info_book"> <i className="fa fa-exclamation-triangle iconWarning"></i> Things to keep in mind</h2>
                    <div class="rules">
                        <h3 className="info_books">Capacity</h3>
                        { this.props.place.attributes && 
                            <p className="text_info_book">
                                {this.props.place.attributes.name} has a maximum capacity of&nbsp;
                                {this.props.place.attributes.capacity} people
                            </p>
                        } 
                        <h3 className="info_books">Rules</h3>
                        <p className="text_info_book">{ this.props.place.attributes && this.props.place.attributes.rule.content}</p>
                        <button className="read_more_book">Read more</button>
                    </div>
                 </div>
                 <div className="book_div_right">
                    <div className="part_left_price">
                        <div className ="part_left_prices">
                            <h3 className="book_title">{this.props.place.attributes && this.props.place.attributes.name}</h3>
                            <address className="show_address">
                                    {this.props.place.attributes && this.props.place.attributes.address.city}, 
                                    {this.props.place.attributes && this.props.place.attributes.address.state}
                            </address>
                        </div>
                        <div className ="part_right_prices">
                            {this.props.place.attributes && 
                                <img src={this.props.place.attributes.images[0].url} className="img_book_step1" />
                            }
                        </div>
                        <div className="pricing">
                                <p className="price_title">Price</p> 
                                {this.props.place.attributes &&
                                    <div className="price_disposition">
                                        <p className="left_text_price">Price /hours</p> 
                                        <p className="right_text_price">${this.props.place.attributes.price}</p>
                                        <p className="left_text_price">Number of hours</p>
                                        <p className="right_text_price"> x {this.props.duration} </p> 
                                        <p className="left_text_price">Extra</p>
                                        <p className="right_text_price"> ${this.props.process_fee && this.props.process_fee}</p>
                                    </div>
                                }
                                {this.props.price && 
                                    <div>
                                        <p className="price_title">Total</p>
                                        <p className="total_price">${this.props.total && this.props.total }</p>
                                    </div>
                                }
                        </div>
                        <p><button onClick={this.props.nextStep} className="agree_btn">Agree</button></p>
                    </div> 
                </div>
            </div>
        )
    }
}
