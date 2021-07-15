'use strict';
import React from 'react';

export default function ListWithMap() {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let listItems = arr.map( (number) => {
        return <li>{number}</li>
    });

    return( <ul>{listItems}</ul> );
};