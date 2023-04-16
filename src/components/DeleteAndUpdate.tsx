import React, { useState } from 'react';
import deleteIcon from '../svgs/Vector.svg'
import updateIcon from '../svgs/bx_bx-edit.svg';
import { useDispatch, useSelector } from 'react-redux';
import PopUp from './PopUp';
import DeletePopUpContent from './DeletePopUpContent';
import { setIsPopUpOpen } from '../actions';
import UpdatePopUpContent from './UpdatePopUpContent';
import style from '../styles/DeleteAndUpdate.module.css'

function DeleteAndUpdate({ id }: any) {
    const [type, setType] = useState('')
    const { isPopUpOpen } = useSelector((globalState: any) => globalState.popUp)
    const dispatch = useDispatch();
    return (
        <div className={style.icons}>
            <img 
                data-testid={`delete-button-${id}`}
                src={deleteIcon} 
                alt="" 
                onClick={() => {
                    setType('delete')
                    dispatch(setIsPopUpOpen(true))
                }
            } />
            {isPopUpOpen && type === "delete" ? 
             <PopUp><DeletePopUpContent id={id} /></PopUp> : <></>}
             <img
                 data-testid={`update-button-${id}`} 
                 src={updateIcon} 
                 alt="" 
                 onClick={
                 () => {
                     setType('update')
                     dispatch(setIsPopUpOpen(true))
                 }
                 }/>
                 {isPopUpOpen && type === "update" ? 
                 <PopUp><UpdatePopUpContent /></PopUp> : <></>}
        </div>
    );
}

export default DeleteAndUpdate;