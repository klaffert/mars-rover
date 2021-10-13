import "../stylesheets/Rovers.css"

import { Carousel } from "react-bootstrap";

function Rovers({ rovers }) {


    return (
        <Carousel fade >
            {
                rovers.map((rover) => (
                    <Carousel.Item key={rover.id}>
                        <img src={rover.img_src} alt={rover.rover.name} className="d-block w-100" />
                        <Carousel.Caption>
                            <div className="caption-title">
                                <h3>{rover.rover.name}</h3>
                                <p>{rover.camera.name}</p>
                            </div>
                            <div className="caption-sol">
                                <p className="sol-date">Sol Date</p>
                                <p>{rover.sol}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel >
    )

}

export default Rovers;
