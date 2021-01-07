import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom"

const ConferenceRoom = () => {
    return <Hero hero="conferenceHero">
         <Banner title ="our conferencerooms">
            <Link to ="/" className="btn-primary">
              return home
            </Link>
        </Banner>
        </Hero>
};

export default ConferenceRoom;