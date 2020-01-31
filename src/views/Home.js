import React, { Component } from 'react'
import current_user from '../helper/current_user'
import '../assets/Home.css'
import img1 from '../assets/img/first-img.jpg'
import img2 from '../assets/img/image1.jpg'
import card from '../assets/img/card.jpg'
import card2 from '../assets/img/card2.jpg'
import card3 from '../assets/img/card3.jpg'
import card4 from '../assets/img/card4.jpg'
import card5 from '../assets/img/card5.jpg'
import card6 from '../assets/img/card6.jpg'
export default class Home extends Component {
    componentDidMount(){
       let user = current_user()
        console.log(user)
    }
    render() {
        return (
            <div>
                <div className="PageConteneur">
                    <div className="partieSearch">
                        <div className="searchContenu">
                            <h1 className="h1Home">Find your place <br/>  anywhere</h1>
                            <h3 className="h3Home">A very easy platform to search some locals to do your <br/> event</h3>
                            <input type='text' placeholder="What are your planing" className="TypeEvent"/>
                            <input type='text' placeholder="Where?" className="LocateEvent"/>
                            <input type='date' placeholder="When?" className="LocateEvent"/>
                            <input type='time' placeholder="Time start" className="TimeEvent"/>
                            <input type='time' placeholder="Time end" className="TimeEvent"/>
                            <input type='number' placeholder="Numbers of people" className="NumberEvent"/>
                            <button className="searchEvent">Search <i className="fas fa-search"></i></button>
                        </div>
                        
                    </div>
                    <div className="imageHome">
                        <img src={img2}/>
                    </div>
                </div>
                <div className="CategorieEvent">
                    <h1 className="H1Categorie">Most Popular </h1>
                    <div className="TypeCategorie">

                        <div className="Categorie1">
                            <img src={card}/>
                            <legend>Categorie 1</legend>
                        </div>

                        <div className="Categorie1">
                            <img src={card2}/>
                            <legend>Categorie 2</legend>
                        </div>

                        <div className="Categorie1">
                            <img src={card3}/>
                            <legend>Categorie 3</legend>
                        </div>

                        <div className="Categorie1">
                            <img src={card4}/>
                            < legend > Categorie 4</legend>
                        </div>

                        <div className="Categorie1">
                            <img src={card5}/>
                            < legend > Categorie 5 </legend>
                        </div>

                        <div className="Categorie1">
                            <img src={card6}/>
                            <legend>Categorie 6</legend>
                        </div>
                        
                    </div>
                    <button className="ButtonCategorie">More Kinds <i className="fas fa-plus"></i></button>
                </div>
            </div>
        )
    }
}
