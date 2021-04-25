import './Platform.css'

function Plat() {
    return (

        <div className="platform">
        <div className="platform-left">
            <h1>The world's <br/>biggest healthcare platform</h1>
            <p>We work from 7 offices all over the world, bringing Docplanner <br/> Group to life in a dozen countries.
            </p>
            <img src="https://www.docplanner.com/img/logo.png"></img>
        </div>
        <div className="platform-right">
            <div className="platform-right-top">
                <div className="flag">
                    <img src=" https://www.docplanner.com/img/flag.png"></img>
                    <h3>Leader in <br/>12 countries</h3>
                    <p>Poland, Brazil, Mexico, Spain, Italy, <br/>Turkey, Colombia, Czech Republic,<br/>Portugal, Argentina, Peru and Chile
                    </p>
                </div>
                <div className="visits">
                    <img src="https://www.docplanner.com/img/visits.png"></img>
                    <h3>4.8 million <br/>appointments</h3>
                    <p>booked last month</p>
                </div>
            </div>
            <div className="platform-right-bottom">
                <div className="patients">
                    <img src="https://www.docplanner.com/img/patients.png"></img>
                    <h3>61.9 mln unique <br/>patients</h3>
                    <p>visit our websites each month</p>
                </div>
                <div className="doctors">
                    <img src="https://www.docplanner.com/img/doctors.png"></img>
                    <h3>92.5k active  <br/>doctors</h3>
                    <p>trust our solutions</p>
                </div>
            </div>

        </div>
    </div>

    )
}




export default Plat;