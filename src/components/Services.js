import './Services.css';


const bgColor =
{
    background: "red"
}

const bgColor1 =
{
    background: "blue"
}


function Services() {
    return (
        <div className="row">
            <div className="column">
                <div className="card" style={bgColor}>
                    
                        Card
                        <br></br>
                        Business Card
                    </div>

                    <div className="card" style={bgColor1}> Card</div>
                        
                        <div className="card" style={bgColor}>Card</div>

                        <div className="card">

                                Card
                                <br></br>
                                Business Card
    

                        </div>

                    </div>



        </div>
    )
}

export default Services