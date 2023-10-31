import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <ol>
                <li>
                    <Link to="/About"> About</Link>
                </li>
                <li>
                    <Link to="/TextForm.js"> TextForm</Link>
                </li>
                <li>
                    <Link to="/"> contect</Link>
                </li>
                <li>
                    <Link to="/Navbar"> navbar</Link>
                </li>

            </ol>



        </div>
    )
}

export default Home