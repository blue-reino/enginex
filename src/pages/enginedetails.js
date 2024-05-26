import React from 'react';
import { useRef, useEffect, useState, Children } from "react";
import { useParams } from 'react-router-dom';
import motors from "../arrays/motors";
import './enginedetails.css';
function EngineDetails() {

    // const [image, setImage] = useState(false);

    // const imagePosition = () => {
  
    //   if (window.scrollY >= 150) {
    //     setImage(true);
    //   } else {
    //     setImage(false);
    //   }
  
    // };
  
    // window.addEventListener('scroll', imagePosition);

    const { id } = useParams();
    const motor = motors.find(m => m.id === id);

    if (!motor) {
        return <div>Motor not found</div>;
    }



    return (
        <div className="details-wrapper">

            {/* <div className={image ? 'details-image-container active'  : 'details-image-container'}> */}
            <div className='details-image-container'>
                <img src={motor.image} alt={motor.name} style={{ width: '500px', height: 'auto', }} />
            </div>

            <div className="details-container">
                <h2>{motor.name}</h2>
                <p><span style={{ fontWeight: 'bold' }}>Manufacturer:</span> {motor.manufacturer}</p>
                <p><span style={{ fontWeight: 'bold' }}>Production:</span> {motor.production}</p>

                <p><span style={{ fontWeight: 'bold' }}>Horsepower and Torque:</span> {motor.horsepowertorque}</p>
                <p><span style={{ fontWeight: 'bold' }}>Configuration:</span> {motor.configuration}</p>
                <p><span style={{ fontWeight: 'bold' }}>Turbocharger:</span> {motor.turbocharger}</p>
                
                 <p><span style={{ fontWeight: 'bold' }}>Cars:</span></p>
                <ul>
                    {motor.cars ?
                        motor.cars.map((car, index) => (
                            <li key={index}>{car}</li>
                        ))
                        :
                        <li>No cars found</li>
                    }
                </ul>

            </div>

   


        </div>
    );
}

export default EngineDetails;