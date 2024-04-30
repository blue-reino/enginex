import './home.css';
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import PopularMotors from '../components/popularsearches';

import React, { useEffect, useState } from 'react';

function Home() {
    // const [placeholder, setPlaceholder] = useState("");
    // const [isTyping, setIsTyping] = useState(false);

    // useEffect(() => {
    //     const txt = ["Search", "Test"];
    //     const speed = 120;
    //     const waitTime = 2000; // Wait time after typing before deleting
    //     let arrayIndex = 0; // Track which element of the array we're currently typing
    //     let charIndex = 0; // Track the position of the character within the current string
    //     let isDeleting = false; // Track whether we're currently deleting characters
    //     let typingTimer;

    //     const type = () => {
    //         setIsTyping(true);
    //         const currentText = txt[arrayIndex];
    //         if (!isDeleting && charIndex < currentText.length) {
    //             setPlaceholder(prevPlaceholder => prevPlaceholder + currentText.charAt(charIndex));
    //             charIndex++;
    //             typingTimer = setTimeout(type, speed);
    //         } else if (!isDeleting && charIndex === currentText.length) {
    //             isDeleting = true;
    //             setTimeout(deletePlaceholder, waitTime);
    //         } else if (isDeleting && placeholder.length > 0) {
    //             setPlaceholder(prevPlaceholder => prevPlaceholder.slice(0, -1));
    //             typingTimer = setTimeout(deletePlaceholder, speed);
    //         } else {
    //             isDeleting = false;
    //             charIndex = 0;
    //             arrayIndex = (arrayIndex + 1) % txt.length; // Move to the next string in the array
    //             setIsTyping(false);
    //             type();
    //         }
    //     };

    //     const deletePlaceholder = () => {
    //         setIsTyping(true);
    //         const currentText = txt[arrayIndex];
    //         if (placeholder.length > 0) {
    //             setPlaceholder(prevPlaceholder => prevPlaceholder.slice(0, -1));
    //             typingTimer = setTimeout(deletePlaceholder, speed);
    //         } else {
    //             setIsTyping(false);
    //             type();
    //         }
    //     };

    //     type();

    //     return () => {
    //         // Cleanup function to clear timeout when component unmounts
    //         clearTimeout(typingTimer);
    //     };
    // }, []); // Empty dependency array ensures useEffect runs only once
    const placeholder = "Search";
    const Hero = () => {    
        return (
            <div className="hero">
                <div className="hero-content">
                    <div className="hero-title">
                        <h1>Empower Your Ride: Discover <span style={{ color: "slateblue" }}>the Heart</span> of Your Car!</h1>
                        <p>Search our database to uncover insights on any motor.</p>
                    </div>
    
                    <div className="hero-search">
                        <label htmlFor="search-id" className="hero-label">
                            <input id="search-id" className="searchInput" placeholder={placeholder} />
                            <button className="searchButton"><i className="ri-search-line"></i></button>
                        </label>
                    </div>
                    <p style={{ fontSize: '20px', textAlign: 'center' }}>Or <CustomLink to="/Explore" className="searchExploreBtn">Explore </CustomLink></p>
                </div>
    
                <hr/>
    
            </div>
    
            
    
        );
    }

    const MidSection = () => {  
        return(
            <div className="mid-section">
               <div className="mid-section-content">

                <h2 style={{fontSize: '35px', marginBottom: '100px'}}>Popular Searches</h2>
                    <PopularMotors />

                </div>
            </div>
        );
    }


    return (
        <>
        <Hero/>
        <MidSection/>
        </>
    );
        
    

   
}

function CustomLink({to, children,  ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <Link className = {isActive ? "active" : ""} to={to} {...props}>{children}</Link>
    )
  }


export default Home;
