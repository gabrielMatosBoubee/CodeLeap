import React from 'react';
import deleteIcon from '../svgs/Vector.svg'
import updateIcon from '../svgs/bx_bx-edit.svg';

function DeleteAndUpdate() {
    return (
        <div>
            <img src={updateIcon} alt=""/>
            <img src={deleteIcon} alt="" />
        </div>
    );
}

export default DeleteAndUpdate;