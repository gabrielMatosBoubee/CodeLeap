import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../actions';
import style from '../styles/Pagination.module.css'

function Pagination({count = 0}: any) {
    const { page } = useSelector((globalState: any) => globalState.pagination)
    
    const dispatch = useDispatch()

    const pageButton = async ({target: {name}}: any) => {
        return name === 'next' ?  dispatch(setPage( page + 1)) : dispatch(setPage( page - 1)) 
    }

    const allPages = () => {
       const quantityPages = Math.ceil(Number(count) / 10)
       if(quantityPages === 3 ) return [1, 2, 3] 
       if (quantityPages <= page + 3) {
           const array = [1, quantityPages - 1, quantityPages - 2, quantityPages]   
           return array
        }
       const array = [page, page + 1, page + 2, Number(quantityPages)]
       return array
    }

    return (
        <div className={style.pagination}>
            <button 
                type='button' 
                name="prev" 
                className={style.button}
                onClick={pageButton}>
                    prev
            </button>
            {allPages().map((pageNumber) => (
                <div key={pageNumber}>
                    <button  
                        className={style.button}
                        onClick={() => dispatch(setPage(pageNumber))}>
                            {pageNumber}
                    </button>
                </div>
            ) )}
            <button 
                type='button' 
                name="next" 
                className={style.button}
                onClick={pageButton}>
                    next
            </button>
        </div>
    );
}

export default Pagination;