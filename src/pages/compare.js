import './compare.css';
import motors from '../arrays/motors';
import { useState } from 'react';

function Compare() {
    const [selectedMotors, setSelectedMotors] = useState([null, null]); // State to store the selected motors

    const handleSelect = (index, e) => {
        const selectedMotorName = e.target.value;
        const motor = motors.find((m) => m.name === selectedMotorName);
        setSelectedMotors((prevSelectedMotors) => {
            const updatedSelectedMotors = [...prevSelectedMotors];
            updatedSelectedMotors[index] = motor || null; // Ensure motor is not undefined
            return updatedSelectedMotors;
        });
    };
    

    return (
        <div className="compare">
            <div className="compare-title">
                <h1 style={{ fontSize: '50px' }}>Compare</h1>
                <p style={{ fontSize: '25px', marginTop:'-20px' }}>Compare up to two motors at a time!</p>
            </div>
            <div className="compare-dropdown">
                <div className="compare-dropdown-item">
                    <input className= "inputBox" list="data" onChange={(e) => handleSelect(0, e)} placeholder="Search Motor 1" />
                    <datalist id="data">
                        {motors.map((op) => (
                            <option key={op.id}>{op.name}</option>
                        ))}
                    </datalist>
                    {selectedMotors[0] && (
                        <div>
                            <h2>{selectedMotors[0].name}</h2>
                            <img src={selectedMotors[0].image} alt={selectedMotors[0].name} style={{ width: '200px', height: '150px' }} />
                            <p><span style={{ fontWeight: 'bold' }}>Manufacturer:</span> {selectedMotors[0].manufacturer}</p>
                            <p><span style={{ fontWeight: 'bold' }}>Production:</span> {selectedMotors[0].production}</p>
                            <p><span style={{ fontWeight: 'bold' }}>Cars:</span> {selectedMotors[0].cars ? selectedMotors[0].cars.join(', ') : 'No cars found'}</p>
                            <p><span style={{ fontWeight: 'bold' }}>Horsepower and Torque:</span> {selectedMotors[0].horsepowertorque}</p>
                            <p><span style={{ fontWeight: 'bold' }}>Configuration:</span> {selectedMotors[0].configuration}</p>
                            <p><span style={{ fontWeight: 'bold' }}>Turbocharger:</span> {selectedMotors[0].turbocharger}</p>

                        </div>
                    )}
                </div>

                <div class="vl"></div>


                <div className="compare-dropdown-item">
                    <input className= "inputBox" list="data" onChange={(e) => handleSelect(1, e)} placeholder="Search Motor 2"  />
                    <datalist id="data">
                        {motors.map((op) => (
                            <option key={op.id}>{op.name}</option>
                        ))}
                    </datalist>
                    {selectedMotors[1] && (
                        <div>
                            <h2>{selectedMotors[1].name}</h2>
                            <img src={selectedMotors[1].image} alt={selectedMotors[1].name} style={{ width: '200px', height: '150px' }} />
                            <p><span style={{ fontWeight: 'bold' }}>Production:</span> {selectedMotors[1].production}</p>
                            <p><span style={{ fontWeight: 'bold' }}>Cars:</span> {selectedMotors[1].cars ? selectedMotors[0].cars.join(', ') : 'No cars found'}</p>
                            <p><span style={{ fontWeight: 'bold' }}>Horsepower and Torque:</span> {selectedMotors[1].horsepowertorque}</p>
                            <p><span style={{ fontWeight: 'bold' }}>Configuration:</span> {selectedMotors[1].configuration}</p>
                            <p><span style={{ fontWeight: 'bold' }}>Turbocharger:</span> {selectedMotors[1].turbocharger}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Compare;
