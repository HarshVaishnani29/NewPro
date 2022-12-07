import React from "react";

import Counters from "../components/Counter.css"

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState(() => {
            return {
                count: this.state.count + 1
            }

        })
    }
    decrement() {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }


    delete() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="main-nav">
                            <li>
                                <a href="#">
                                    <img src="images/dmart.png" />
                                </a>
                            </li>

                            <h1>
                                D-mart
                            </h1>

                            <h2>
                                Products
                            </h2>

                            <h3>
                                Kurkure Masala Munch
                            </h3>
                            <img src="images/kurkure.png" className="pro2" />
                            <p>
                                {this.state.count}
                            </p>
                            <div className="addremovebtn">
                                <button onClick={() => { this.increment() }}>
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                                <button onClick={() => { this.decrement() }}>
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <button className="Delete" onClick={() => { this.delete() }}>
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Counter;