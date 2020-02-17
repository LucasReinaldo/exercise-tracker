import React, { useState } from 'react';

import api from '../../services/api';

import './createUser.css';

function CreateUser() {
    const [username, setUsername ] = useState('');
    // const [users, setUsers ] = useState(['AA']);

    const handleSubmit = (e) => {
        e.preventDefault();

        const registerUser = ({
          username,
        });
        
        setUsername('');

        try {
          api.post('/users/add', registerUser);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
        <aside>
            <strong>Register</strong>
            <form onSubmit={handleSubmit}>
                <div className="input-block">
                    <label htmlFor="username">Username</label>
                    <input name="username" id="username" required value={username} onChange={e => setUsername(e.target.value)}></input>
                </div>
                <button type="submit">Send</button>
            </form>
        </aside>
        </>
    );
};

export default CreateUser;