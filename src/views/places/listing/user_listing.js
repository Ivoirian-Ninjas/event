import React, { Component } from 'react'
import { API_ROOT } from '../../../constants';
import current_user from '../../../helper/current_user';

export default class User_listing extends Component {
    componentDidMount(){
        fetch(`${API_ROOT}/places?user_id=${current_user().id}`)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
                        this.setState({places: json.places})

        })
    }

    state = {
        places: []
    }
    display_places = () => this.state.places.map( e => (<div>
                                                        <h3>{e.data.attributes.name}</h3>
                                                        <div  style={{width: "10%"}} >
                                                            <img src={e.data.attributes.images[0].url} style={{width: "100%"}}/>
                                                        </div>
                                                        {/* <h3>Status: {e.attribute.status === "complete" ? "Complete" : "Incomplete" }</h3> */}
                                                        {/** Show the progression bar here */}
                                                        { e.data.attributes.status === "complete" ? <button>Edit</button>:<button>Continue</button>
                                            
                                                        }
                                                        

                                                     </div>) )
    
    
    render() {
        return (
            <div  className="PageConteneur">
                <h1>This is the user's listing</h1>
                {this.state.places.length === 0 ? <div> <p>You do not have a listing yet. <a href="/new_places">Start Listing?</a></p> </div>: 
                <div>
                    {this.display_places()}
                </div>
                }
            </div>
        )
    }
}
