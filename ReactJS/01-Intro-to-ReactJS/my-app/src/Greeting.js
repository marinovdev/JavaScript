// Example of conditional rendering
'use strict'
import React from 'react';

function UserGreeting() {
    return (<h5>Welcome back!</h5>);
}

function GuestGreeting() {
    return (<h5>Please sign in!</h5>);
}

export default function Greeting(props) {
    if (props.IsLoggedIn) {
        return UserGreeting();
    } else {
        return GuestGreeting();
    };
}

//below is example of conditional rendering with ternary operator:

// export default function Greeting(props) {
//     return (
//         <div>
//             {props.isLoggedIn ? < UserGreeting /> : <GuestGreeting />}
//         </div>
//     )
// }
