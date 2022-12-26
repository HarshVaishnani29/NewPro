import React, { useState } from 'react'
import '../TodoApp/Todo.css';

function ToDo() {
    const [items, setItems] = useState("");
    const [addlist, setAddlist] = useState([]);
    
    const handleChange = (e) => {
        setItems(e.target.value);
    }

    const addtodo = () => {
        setAddlist((olditems) => {
            return [...olditems, items ]
        });
        setItems("");
    }

    const deletItems = (id) => {

        const newarr = addlist.filter((v,i) => {
                return i !== id;
            })
            setAddlist(newarr);
    }

    const RemoveAll = (items) => {

        setAddlist((olditems) => {
            return [...olditems && items ? ( !! items  )  : '' ]
        });

    }
    

    return (
        <div className="packet">
            <h1> ToDoApp </h1>
            <div className="task">
                <input type="text" placeholder="Add a New Items to list" onChange={handleChange} value={items} />
                <button className='submit' type='submit' onClick={ ( !! items  ) ? addtodo : ''}>Add</button>


                <ol>
                    {
                        addlist.map((v, i) => {
                            return (
                                <>
                                    <li key={i} id={i} onSelect={deletItems}>{v}
                                        <a onClick={() => deletItems(i)}></a>
                                    </li>   
                                </>
                            )
                        })
                    }
                </ol>
            </div>
            <div className="Functions">
                <button className="clear-btn" onClick={() => {RemoveAll()}}>Clear All</button>
            </div>
        </div>

    )
}

export default ToDo;