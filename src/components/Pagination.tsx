import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../actions';

function Pagination() {
    const { page } = useSelector((globalState: any) => globalState.pagination)
    
    const dispatch = useDispatch()

    const pageButton = async ({target: {name}}: any) => {
        return name === 'next' ?  dispatch(setPage( page + 1)) : dispatch(setPage( page - 1)) 
    }

    return (
        <div>
            <button type='button' name="next" onClick={pageButton}>next</button>
            <button type='button' name="prev" onClick={pageButton}>prev</button>
        </div>
    );
}

export default Pagination;