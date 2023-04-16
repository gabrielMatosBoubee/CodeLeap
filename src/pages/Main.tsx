import React from 'react';
import Posts from '../components/Posts';
import CreatePost from '../components/CreatePost';
import style from '../styles/Main.module.css'

function Main() {
    return (
        <div className={style.main}>
            <header className={style.header}>
                <h2 className={style.title}>CodeLeap Network</h2>
            </header>
            <div className={style.createPost}>
              <CreatePost />
            </div>
            <div className={style.posts}>
                <Posts />
            </div>
        </div>
    );
}

export default Main;