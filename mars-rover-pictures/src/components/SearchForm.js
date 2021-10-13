import "../stylesheets/SearchForm.css"

import { Button, Form } from "react-bootstrap";

function SearchForm({ onChange, onSubmit }) {
    return (
        <div className="search-form-container">
            <div className="hero-text">
                <h3>Mars is the only known planet inhabited solely by robots.</h3>
            </div>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Rover</Form.Label>
                    <Form.Select aria-label="Default select example" name="rover" onChange={onChange} size="lg">
                        <option>Select a vehicle</option>
                        <option value="opportunity">Opportunity</option>
                        <option value="spirit">Spirit</option>
                        <option value="curiosity">Curiosity</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Sol</Form.Label>
                    <Form.Control type="text" placeholder="1000" name="sol" onChange={onChange} size="lg" />
                    <Form.Text className="text-muted">
                        Days on Mars since Rover landed
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 camera" controlId="exampleForm.ControlInput1">
                    <Form.Label>Camera</Form.Label>
                    <Form.Select aria-label="Default select example" name="camera" onChange={onChange} size="lg">
                        <option>Select a camera</option>
                        <option value="fhaz">Front Hazard Avoidance Camera</option>
                        <option value="rhaz">Rear Hazard Avoidance Camera</option>
                        <option value="mast">Mast Camera</option>
                        <option value="chemcam">Chemistry and Camera Complex</option>
                        <option value="mahli">Mars Hand Lens Imager</option>
                        <option value="mardi">Mars Descent Imager</option>
                        <option value="navcam">Navigation Camera</option>
                        <option value="pancam">Panoramic Camera</option>
                        <option value="minites">Miniature Thermal Emission Spectrometer (Mini-TES)	</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" size="lg" type="submit" value="submit">
                    Search
                </Button>
            </Form>
        </div>
    )
}

export default SearchForm;