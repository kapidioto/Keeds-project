import React from 'react';
import {useEffect, useState} from 'react'
import {Link} from "react-router-dom"

const Navigation = () => {
    return(
        <nav className='nav-bar'>
            <div className='nav-holding'>
                <div className='nav-hiddle'>
                    
                </div>
                <div className='button-holder'>
                    <Link to='/'>
                        <i className="bi bi-person"  id="/"></i>
                    </Link>
                    <Link to='/tasks'>
                        <i className="bi bi-joystick" id="/tasks" ></i>
                    </Link>
                    <Link to='/top'>
                        <i className="bi bi-rocket-takeoff" id="/top" ></i>
                    </Link>
                    <Link to='/store'>
                        <i className="bi bi-bag" id="/store" ></i>
                    </Link>
                    <Link to='/stake'>
                        <i className="bi bi-archive" id="/stake" ></i>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation