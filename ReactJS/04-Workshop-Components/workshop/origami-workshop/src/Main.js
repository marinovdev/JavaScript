'use strict';
import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="Main">
                <h1>Some heading</h1>
                {Posts()}
            </main>
        )
    }
}

function Posts() {
    return(
        <div className="Posts">
            {Post()}
            {Post()}
            {Post()}
        </div>
    )
}

function Post() {
    return(
        <div className="Posts">
            <img></img>
            <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid voluptatem
                 commodi unde molestias ea voluptates alias dolore praesentium. Tempora pariatur in 
                 accusantium consectetur dignissimos asperiores minima impedit sed sequi.
            </p>
            {PostAuthor()}
        </div>
    )
}

function PostAuthor() {
    return (
    <div>
        <span>
            <smal>Author:</smal>
                Some Author
        </span>
    </div>
    )
}

export default Main;
