import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Singup() {
    const [username, setUsername] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const history = useHistory()

    useEffect(() => {
        if (username.length === 0) {
            return setIsDisabled(true);
        }
        return setIsDisabled(false)
    }, [username])

    return (
        <div>
            <h2>Welcome to CodeLeap network!</h2>
            <label htmlFor="username">
                <h4>Please enter your username</h4>
                <input 
                    type="text" 
                    id='username' 
                    alt='john doe'
                    onChange={({target: {value}}: React.ChangeEvent<HTMLInputElement>) => 
                    setUsername(value)}
                />
                <button 
                    disabled={isDisabled}
                    type='button'
                    onClick={() => history.push('/careers')}>
                        ENTER
                </button>
            </label>
        </div>
    );
}

export default Singup;