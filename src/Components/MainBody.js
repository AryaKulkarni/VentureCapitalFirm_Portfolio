import useScrollSnap from 'react-use-scroll-snap';
import React, { useEffect, useRef } from "react";
import CompaniesData from "./CompaniesData"
import Companies from "./Companies"
import Header from "./Header"
import Footer from "./Footer"



export default function MainBody() {
    // const scrollRef = useRef(null);
    // useScrollSnap({ ref: scrollRef, duration: 0.25, delay: 0.1});
    const companyElements=CompaniesData.map(company=> {
        return (
            <section className="child">
          <Companies company={company}/>
          </section>
        )})
        console.log(companyElements)






    return (
        
        <div className="MainBody">
            <section className="child">
            <Header style={{height:"5vw"}}/>
                    <div className="tagline">
                        <h1>We help the daring build legendary companies.</h1>
                    </div>
                    <div className="tagline--base">
                        We enable founders to secure their legacy and move on to their next adventure while participating in the next horizon of growth.
                    </div>
                    <div className="tagline--button">
                        <button>Get in Touch</button>
                    </div>
            </section>
            {/* <section className="child">
                <div className="about--us">
                    <h2>Who We Are</h2>
                    <div>
                        <div></div>
                        <subtitle className="about--us--text">
                        We are investors looking for startups who have either identified new economies, or new asset classes. We back those founders with venture capital and/or debt financing.
                        </subtitle>
                    </div>
                </div>
            </section> */}
            
                
                    {companyElements}
                    <section className="child">
                    <Footer/>
                    </section>
        </div>
    )
}