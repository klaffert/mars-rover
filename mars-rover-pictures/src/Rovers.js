import './Rovers.css';

function Rovers({ rovers }) {

    return (
        <div className="rovers">
            {rovers.map((rover) => (
                <div key={rover.id} className="rover-card">
                    <img src={rover.img_src} alt="rover" />
                    <div>
                        <h3>Rover Name: {rover.rover.name}</h3>
                        <h3>Sol: {rover.sol}</h3>
                        <h3>Camera Name: {rover.camera.name}</h3>
                        <h3>Launch Date: {rover.rover.launch_date}</h3>
                        <h3>Landing Date: {rover.rover.landing_date}</h3>
                        <h3>Status: {rover.rover.status}</h3>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default Rovers;