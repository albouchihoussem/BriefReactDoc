import './Cartes.css'

function Carddoc(){
    return(

<div>
<div className="ligne">
<div className="box verte">
            <img src="https://www.docplanner.com/icons/icon-patients.svg"></img>
            <h3 className ="white">For patients</h3>
            <p className ="white" >Find a doctor, book a visit and <br/> solve any health-related doubt</p>
            <select id="monselect">
                <option value="valeur1">ITALY</option>
                <option value="valeur2" selected>CHOOSE COUNTRY</option>
                <option value="valeur3">UK</option>
            </select>
          </div>
          <div className="box bleue">
          <img src="https://www.docplanner.com/icons/icon-doctors.svg"></img>
            <h3 className ="white">For doctors</h3>
            <p className ="white">Save time managing visits and <br/> cut no-shows by half</p>
            <select id="monselect">
                <option value="valeur1">ITALY</option>
                <option value="valeur2" selected>CHOOSE COUNTRY</option>
                <option value="valeur3">UK</option>
            </select>
          </div>
          <div className="box black">
          <img src="https://www.docplanner.com/icons/icon-clinics.svg"></img>
            <h3 className ="white">For clinics</h3>
            <p className ="white">Deliver an exceptional patient experience in your clinic</p>
            <select id="monselect">
                <option value="valeur1">ITALY</option>
                <option value="valeur2" selected>2 to 20 specialists</option>
                <option value="valeur3">UK</option>
                
            </select>
          </div>
</div>
</div>

       
    )
}
export default Carddoc;