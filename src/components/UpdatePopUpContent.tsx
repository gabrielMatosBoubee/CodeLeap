import React, { useEffect, useState } from 'react';
import style from '../styles/UpdatePopUpContent.module.css'
import axios from 'axios';
import usePost from './usePost';
import { setIsPopUpOpen } from '../actions';
import { useDispatch } from 'react-redux';

function UpdatePopUpContent({id}: any) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isDisabled, setIsDisabled] = useState(true);

    const { refetch } = usePost()
    const dispatch = useDispatch()
 
    const patchPost = async () => {
     await axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`, {
        title, content
     })
     dispatch(setIsPopUpOpen(false))
     refetch()
    }

    useEffect(() => {
        if(content.length > 0 && title.length > 0) {
            return setIsDisabled(false);
        } return setIsDisabled(true);
    }, [content, title])
 
     return (
         <div className={style.update}>
             <h2 className={style.title}>Edit item</h2>
             <label htmlFor='title'>
                Title
            </label>
            <input 
                data-testid='update-title'
                type="text" 
                id="title" 
                placeholder='Hello world'
                className={style.titleInput}
                onChange={({target: {value}}) => setTitle(value)}
            />
            <label htmlFor="content">
                Content
            </label>
            <input 
                data-testid='update-content'
                type="text" 
                id="content" 
                placeholder='Content here' 
                className={style.content}
                onChange={({target: {value}}) => setContent(value)}
            />
             <div className={style.buttons}>
                 <button 
                     className={style.cancel} 
                     onClick={() => dispatch(setIsPopUpOpen(false))}>
                         Cancel
                 </button>
                 <button 
                     disabled={isDisabled}
                     className={style.save} 
                     onClick={patchPost}>
                         Save
                 </button>
             </div>
         </div>
        )
}

export default UpdatePopUpContent;