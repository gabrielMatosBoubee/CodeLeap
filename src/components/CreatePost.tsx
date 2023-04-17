import React, { useEffect, useState } from 'react';
import usePost from './usePost';
import axios from 'axios';
import style from '../styles/CreatePost.module.css'
import { useSelector } from 'react-redux';

function CreatePost() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isDisabled, setIsDisabled] = useState(true);

    const { nickname } = useSelector((globalState: any) => globalState.nickname)

    const { refetch } = usePost();

    const createPost = async () => {
       await axios.post("http://dev.codeleap.co.uk/careers/", {
            username: nickname,
            title,
            content
        })
        refetch()
    }

    useEffect(() => {
        if(content.length > 0 && title.length > 0) {
            return setIsDisabled(false);
        } return setIsDisabled(true);
    }, [content, title])

    return (
        <div className={style.createPostBorder}>
            <div className={style.createPost}>

            <h2>What's on your mind?</h2>
            <label htmlFor='title'>
                Title
            </label>
            <input 
                className={style.titleInput}
                type="text" 
                id="title" 
                placeholder='Hello world'
                onChange={({target: {value}}) => setTitle(value)}
            />
            <label htmlFor="content">
                Content
            </label>
            <input 
                className={style.content}
                type="text" 
                id="content" 
                placeholder='Content here' 
                onChange={({target: {value}}) => setContent(value)}
            />
            <button 
                className={style.button}
                type='button' 
                disabled={isDisabled} 
                onClick={createPost}>
                    Create
            </button>
            </div>
        </div>
    );
}

export default CreatePost;