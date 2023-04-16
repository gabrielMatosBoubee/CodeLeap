import React from 'react';
import style from '../styles/DeletePopUpContent.module.css'
import axios from 'axios';
import usePost from './usePost';
import { setIsPopUpOpen } from '../actions';
import { useDispatch } from 'react-redux';

function DeletePopUpContent({id}: any) {

   const { refetch } = usePost()
   const dispatch = useDispatch()

   const deletePost = async () => {
    await axios.delete(`https://dev.codeleap.co.uk/careers/${id}`)
    dispatch(setIsPopUpOpen(false))
    refetch()
   }

    return (
        <div>
            <h2 className={style.title}>Are you sure you want to delete this item?</h2>
            <div className={style.buttons}>
                <button 
                    className={style.cancel} 
                    onClick={() => dispatch(setIsPopUpOpen(false))}>
                        Cancel
                </button>
                <button 
                    className={style.delete} 
                    onClick={deletePost}>
                        Delete
                </button>
            </div>
        </div>
    );
}

export default DeletePopUpContent;