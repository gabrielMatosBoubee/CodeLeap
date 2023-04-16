import React from 'react';
import style from '../styles/PopUp.module.css'

function PopUp({children}: any) {
    return (
        <div className={style.popupWrapper}>
            <div className={style.popup}>
                <div className={style.popupContent}>{children}</div>
            </div>      
        </div>
    );
}

export default PopUp;