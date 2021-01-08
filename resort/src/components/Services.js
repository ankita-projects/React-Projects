import React, { Component } from 'react';
import{FaSwimmingPool,FaCocktail,FaCoffee} from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component{
    state={
        services:[
            {
                icon:<FaSwimmingPool/>,
                title:"Swimming & Sauna",
                info: "Sauna is very much about being in the moment. It encourages the virtue of presence and feeds all your senses from the smell of birch leaves to the feel of the wooden benches, and the sound of water sizzling on the stones"
            },
            {
                icon:<FaCocktail/>,
                title: "cocktails",
                info: "Come and enjoy our welcome drink with Bill Hansen's handcrafted cocktails. We only use fresh, locally sourced ingredients: homemade infused syrups, freshly squeezed juices, fruit purées and fresh herbs"
            },
         
            {
                icon:<FaCoffee/>,
                title:"Coffee",
                info: "We would like our guests to enjoy meeting each other, and to make new friends."
            }
        ]
    }
    render() {
        return (
            <section className ="services">
            <Title title = "services"/>
            
            <div className ="services-center">
                {this.state.services.map((item,index) => {
                    return(
                        <article key ={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    );
                    })}                        
            </div>
            </section>

        );
                    
            

}
}