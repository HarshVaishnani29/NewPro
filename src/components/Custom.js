import { react } from 'react';
import { Custom } from "../components/custom.css";

function Header(props) {
    return (
    <header>
        <div className='container'>
            <div className='row'>
        <div class="Navbar">
          <nav>
            <ul>
              <li><a href="Custom.js">
            <img src={props.logo}/>
                </a></li>
              {/* <li><a href="#">Home</a></li> */}
              {
                props.lists.map((h)=>{
                    return(
                        <li><a href="#">{h}</a>
                        </li>    
                    )
                })
              }
            </ul>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </nav>
        </div>
            </div>
        </div>
      </header>
    )
}
export default Header;
