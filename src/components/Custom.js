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
                props.menus.map((h)=>{
                    return(
                        <li><a href="#">{h}</a>
                        </li>    
                    )
                })
              }
            </ul>
          </nav>
        </div>
            </div>
        </div>
      </header>
    )
}
export default Header;