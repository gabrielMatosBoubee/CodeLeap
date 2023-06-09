import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from '../styles/Singup.module.css'
import { useDispatch } from 'react-redux';
import { setNickName } from '../actions';

function Singup() {
    const [username, setUsername] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const dispatch = useDispatch();

    const history = useHistory()

    useEffect(() => {
        if (username.length === 0) {
            return setIsDisabled(true);
        }
        return setIsDisabled(false)
    }, [username])

    return (
        <main className={style.Singup}>
            <div>
                <h2>Welcome to CodeLeap network!</h2>
                <label htmlFor="username">
                    <p>Please enter your username</p>
                </label>
                <div className={style.submit}>
                    <input 
                        type="text" 
                        id='username' 
                        placeholder='john doe'
                        className={style.name}
                        onChange={({target: {value}}: React.ChangeEvent<HTMLInputElement>) => 
                        setUsername(value)}
                        />
                    <button 
                        disabled={isDisabled}
                        type='button'
                        className={style.button}
                        onClick={() => {
                            dispatch(setNickName(username))
                            localStorage.setItem('nickname', username)
                            history.push('/careers')
                            }}>
                            ENTER
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Singup;