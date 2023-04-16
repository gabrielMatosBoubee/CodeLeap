import React, { useEffect, useState } from 'react';
import usePost from './usePost';
import axios from 'axios';
import { useSelector } from 'react-redux';

function CreatePost() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isDisabled, setIsDisabled] = useState(true);

    const { nickname } = useSelector((globalState: any) => globalState.nickname)

    const { refetch } = usePost();

    const createPost = async () => {
       await axios.post("https://dev.codeleap.co.uk/careers", {
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
        <div>
            <h2>What's on your mind?</h2>
            <label htmlFor='title'>
                Title
            </label>
            <input 
                type="text" 
                id="title" 
                placeholder='Hello world'
                onChange={({target: {value}}) => setTitle(value)}
            />
            <label htmlFor="content">
                Content
            </label>
            <input 
                type="text" 
                id="content" 
                placeholder='Content here' 
                onChange={({target: {value}}) => setContent(value)}
            />
            <button 
                type='button' 
                disabled={isDisabled} 
                onClick={createPost}>
                    Create
            </button>
        </div>
    );
}

export default CreatePost;