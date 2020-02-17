import React, { useState, useEffect } from 'react';

import CKEditor from 'ckeditor4-react';

import api from '../../services/api';

import './editExercise.css';

import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';

function EditExercise(props) {
    const [ username, setUsername ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ duration, setDuration ] = useState('');
    const [ date, setDate ] = useState(new Date());
    const [ users, setUsers] = useState([]);

    useEffect(() => {
      async function loadExercises() {
        const response = await api.get(`/exercises/${props.match.params.id}`);
        
        setUsername(response.data.username);
        setDescription(response.data.description);
        setDuration(response.data.duration);
        setDate(new Date(response.data.date));
    }
    loadExercises();

      async function loadUsers() {
          const response = await api.get('/users');
  
          setUsers(response.data.map(user => user.username));
      }
      loadUsers();

      }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateExercise = ({
            username,
            description,
            duration,
            date,
            users: []
        });

        try {
            api.put(`/exercises/update/${props.match.params.id}`, updateExercise);
        } catch (error) {
            console.log(error);
        }

        window.location = '/'; //return to main page
    }

    return (
        <>
        <aside>
            <strong>Edit Exercise</strong>
            <form onSubmit={handleSubmit}>
                <div className="input-block">
                    <label htmlFor="username">Username</label>
                    <select name="username" id="username" required value={username} onChange={e => setUsername(e.target.value)}>
                        {users.map(user => 
                            <option key={user} value={user}>{user}</option>)}
                    </select>
                </div>
                <div className="input-block">
                    <label htmlFor="description">Description</label>
                    <div className="input-editor">
                        <CKEditor data={description} type="inline" onChange={e => setDescription(e.editor.getData())} />
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-block">
                        <label htmlFor="duration">Duration</label>
                        <input type="number" name="duration" id="duration" placeholder="minutes" required value={duration} onChange={e => setDuration(e.target.value)}></input>
                    </div>
                    <div className="input-block">
                        <label htmlFor="date">Date</label>
                        <ReactDatePicker type="Date" name="date" id="date" required dateFormat="dd/MM/yyyy" selected={date} onChange={e => setDate(e)} />
                    </div>
                </div>
                <button type="submit">Update</button>
            </form>
        </aside>
        </>
    );
};

export default EditExercise;