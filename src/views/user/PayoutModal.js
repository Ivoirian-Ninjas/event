import React from 'react'
import card_default from '../../assets/img/Last/pngtree-vector-credit-card-icon-png-image_925424.jpg'
import card_1 from '../../assets/img/Last/6744618_preview.png'
import card_2 from '../../assets/img/Last/bank-of-america-icon-png-7.png'
import card_3 from '../../assets/img/Last/mastercard-credit-card-business-debit-card-logo-png-favpng-xAry6ChN7vpf53S2rA2aNP7KA.jpg'
import card_4 from '../../assets/img/Last/JCB_logo.svg.png'
import {CardNumberElement, CardExpiryElement, CardCvcElement} from '@stripe/react-stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

export default function PayoutModal(props) {
    return (
            <div className="div_modal_prof">
                <button onClick={props.close_modal} className="close_modal_prof">
                    <i className="far fa-times-circle"></i> 
                </button>
                <div className="modal_container_prof">
                    <p className="p_add_new">Add a new credit card</p>
                    <div className="contain_modal">
                        <div className="div_contain_modal">
                            <div className="div_input_modal">
                                <label className="label_modal_prof">Card Number</label>
                                <CardNumberElement
                                    className="input_modal_prof" 
                                    options={{
                                        style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                            color: '#aab7c4',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                        },
                                    }}
                                    />
                 
                            </div>
                            <div className="div_input_modal">
                                <label className="label_modal_prof">Expiration Date</label>
                                <CardExpiryElement 
                                className="input_modal_prof" 
                                    options={{
                                            style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                color: '#aab7c4',
                                                },
                                            },
                                            invalid: {
                                                color: '#9e2146',
                                            },
                                            },
                                        }}
                                />
                            </div>
                            <div className="div_input_modal">
                                <label className="label_modal_prof">Security Code</label>
                                <CardCvcElement 
                                className="input_modal_prof" 
                                options={{
                                            style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                color: '#aab7c4',
                                                },
                                            },
                                            invalid: {
                                                color: '#9e2146',
                                            },
                                            },
                                        }}
                                />
                            </div>
                         
                        </div>
                        <div className="div_contain_modal">
                            <div className="display_card">
                                <img src={card_default} className="image_card"/>
                            </div>
                            <div className="example_card">
                                <p className="p_exemple_card">Available payment methods:</p>
                                <div className="some_images">
                                <img src={card_1} className="image_card_small"/>
                                <img src={card_2} className="image_card_small"/>
                                <img src={card_3} className="image_card_small"/>
                                <img src={card_4} className="image_card_small"/>
                                </div>
                            </div>
                            <div className="div_btn_modal">
                                <button className="btn_save modalBtn">Save</button>
                                <button className="btn_cancel modalBtn">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
