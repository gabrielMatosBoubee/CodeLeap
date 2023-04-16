import React from 'react';
import Posts from '../components/Posts';
import CreatePost from '../components/CreatePost';

function Main() {
    return (
        <div>
            <header>
                <h2>CodeLeap Network</h2>
            </header>
            <CreatePost />
            <div>
                <Posts />
            </div>
        </div>
    );
}

export default Main;