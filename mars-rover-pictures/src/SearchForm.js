function SearchForm({ onChange, onSubmit }) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Rover Name:
                </label>
                <select name='rover' onChange={onChange} >
                    <option value="opportunity">Opportunity</option>
                    <option value="spirit">Spirit</option>
                    <option value="curiosity">Curiosity</option>
                </select>
                <label>
                    Sol:
                </label>
                <input
                    type="text"
                    // value={query.date}
                    onChange={onChange}
                    name='sol'
                />
                <label>
                    Camera Name:
                </label>
                <select name='camera' onChange={onChange} >
                    <option value="fhaz">Front Hazard Avoidance Camera</option>
                    <option value="rhaz">Rear Hazard Avoidance Camera</option>
                    <option value="mast">Mast Camera</option>
                    <option value="chemcam">Chemistry and Camera Complex</option>
                    <option value="mahli">Mars Hand Lens Imager</option>
                    <option value="mardi">Mars Descent Imager</option>
                    <option value="navcam">Navigation Camera</option>
                    <option value="pancam">Panoramic Camera</option>
                    <option value="minites">Miniature Thermal Emission Spectrometer (Mini-TES)	</option>
                </select>
                <input type="submit" value="Submit" />
            </form>

        </div >
    )
}

export default SearchForm;