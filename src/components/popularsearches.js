import motors from "../arrays/popularmotors";
import './components-styling/popularsearches.css';
function MotorCard(){



    
    return(
        <div className="motor-card-container">
            {motors.map(motor => (
                    <button className="motor-card" key={motor.id}> 
                        
                        <h2 style={{fontSize:"30px"}}>{motor.name}</h2>
                        <h3 style={{fontSize:"15px"}}>{motor.quickstats.join(':    ')}</h3>
                    </button>
            ))}
        </div>
    );
}

export default MotorCard;