function Rovers({ rovers }) {
    return (
        <div>
            {rovers.map((rover) => (
                <div key={rover.id}>
                    <img src={rover.img_src} alt="rover" />
                    <div>
                        <h3>{rover.rover.name}</h3>
                        <h3>{rover.sol}</h3>
                        <h3>{rover.camera.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Rovers;