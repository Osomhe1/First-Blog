import React from 'react'
import {Link} from 'react-router-dom';

export default function Nav() {
    const style = {
        color: 'white'
    };


    return (
        <nav>
           
            <ul className='nav-link'>
                <Link style={style} to='/article'><li>Article</li></Link>
                <Link style={style} to='/about'><li>About</li></Link>
                <Link style={style} to='/book'><li>Book</li></Link>
                <Link style={style} to='/newsLetter'><li>NewsLetter</li></Link>
            </ul>
        </nav>
    )
}
