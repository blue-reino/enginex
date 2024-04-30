import './explore.css';
import motors from '../arrays/motors';

function Explore () {
    return(
        <div className="ExploreContent">
            <div className="explore-left">
            <h1 style={{ fontSize: '30px', fontWeight: '500' }}>Explore ({motors.length})</h1>
                
            </div>

            <div class="vl"></div>
            

            <div className="explore-right">
                <div className="explore-right-content">
                    {motors.map(motor => (
                        <button className="motor-card-explore" key={motor.id}> 
                            
                            <h2 style={{fontSize:"30px"}}>{motor.name}</h2>
                            <h3 style={{fontSize:"15px"}}>{motor.quickstats.join(':    ')}</h3>
                        </button>
                ))}
                </div>
            </div>
            
        </div>
    );
}

export default Explore;