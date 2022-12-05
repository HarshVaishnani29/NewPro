import { React } from 'react';
import { Header } from '../components/Header.css';

function Headers(props) {
    console.log(props);
    return (
        <header>
            <div className='container'>
                <div className='row'>
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container">
                            <a className="navbar-brand" href="#">
                                <img src={props.logo} />
                                <img src={props.logo1} />
                                <img src={props.logo2} />
                            </a>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    {/* <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled">Disabled</a>
                                    </li> */}
                                    {
                                        props.menu.map((m) => {
                                            return (
                                                <li className="nav-item">
                                                    <a className="nav-link">{m}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default Headers;