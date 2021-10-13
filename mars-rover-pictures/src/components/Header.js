import logo from "../images/NASA_logo.svg"
import "../stylesheets/Header.css"

import { Container, Navbar } from "react-bootstrap";

function Header() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <img
                        alt="NASA logo"
                        src={logo}
                        className="d-inline-block align-top"
                    />
                    <div className="d-inline-block align-left logo-text">
                        <p className="title-head">Mars Rover</p>
                        <p>Capture Library</p>
                    </div>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;

