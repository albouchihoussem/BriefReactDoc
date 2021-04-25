import React from 'react';
import './App.css';
import image1 from './components/images/image1.png';
import Navbar from './components/Nav';
import Para from './components/Paragraph';
import Company from './components/Companies';
import Footr from './components/Footer';
import Country from './components/Countries';
import Plat from './components/Platform';
import Carddoc from './components/Cartes';





function App() {
  return (
 <div className = "style">
    <Navbar/>
    <div className="textetoile"><img className = "img1" src={image1} />
    <h1 className = "titre">Making the healthcare experience more human</h1></div>
    <Para/>
    <Carddoc/> 
    <Company/>
    <Plat/>
<div className="smallpara">
            <h1>Improve the lives of millions.
                <br/> Change yours forever</h1>
            <p>More than 1400 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Bologna, Mexico City and Curitiba, our search for great talent never stops.</p>
        </div> 
<Country/>
    <div className= "join-us">
    <h1>
				Sounds interesting? Join us now!
			</h1>
     <a href="/career" className="bouton">See all current openings</a> 
    </div>
<Footr/>
 </div>
    )
}

export default App;
