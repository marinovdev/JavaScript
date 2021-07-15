'use strict'
import React from 'react';

function ButtonHandler(props) {

    function clickHandler() {
        let actionBox = document.querySelector('#action-box');
        actionBox.innerHTML += '<br>+Clicked';
    }
    return (
        <div>
            <button onClick = { clickHandler }>
                Click Me
            </button>
        </div>
    );
}

export default ButtonHandler;