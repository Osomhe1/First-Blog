import React from 'react';
import './App.css';

export default function NewsLetter() {
    return (
        <div>
            <h1>The OSOMHE Newsletter</h1>
            <p>Have you ever wanted to see cool front-end design and development 
                content delivered directly to your inbox?</p>

                <p>If you nodded YES, look no further! Sign up for the OSOMHE newsletter by submitting 
                    your e-mail address into the following form:</p>
                   <div>
                      <input type='email' placeholder='email address' />
                      <button onClick='Subscrib'>Subscribe</button>
                    </div>
        </div>
    )
}
