
import './Nav.css'

function Navbar(){
    return (

      <nav className="navContents">
      <div className="container">
          <h1><img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
                  alt="Docplanner Group" />
          </h1>
          <nav className="main-contents">
              <ul className="nav-menu">
                  <li className="AboutUs">About us</li>
                  <li className="Career">Career</li>
                  <li className="Departments">Departments</li>
              </ul>
          </nav>
      </div>
  </nav>
)
    }

     
export default Navbar;

