import React, { useEffect, useState } from 'react';

function CreatePost() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isDisabled, setIsDisabled] = useState(true);

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
            <button type='button' disabled={isDisabled}>Create</button>
        </div>
    );
}

export default CreatePost;