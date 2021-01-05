import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner"
import {Link} from "react-router-dom";
export default function Home() {
    return <Hero>
        <Banner title ="Luxurious Rooms" subtitle ="Deluxe Rooms Starting At €85">
            <Link to ="/rooms" className = "btn-primary">
                Our rooms
            </Link>
        </Banner>
        </Hero>;
        
   
        
    
}
