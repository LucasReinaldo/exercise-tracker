import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ReactHtmlParser from 'react-html-parser';

import './exerciseList.css';

import api from '../../services/api';


const ExerciseList = () => {
  const [exercises, setExercises] = useState([])
  
  useEffect(() => {
    async function loadExercises() {
      const response = await api.get('/exercises');

      setExercises(response.data);
    }
    loadExercises();
  }, []);

  const deleteExercise = (id) => {
    api.delete(`/exercises/delete/${id}`);

    //para cada elemento de exercises, eu filtro apenas os elementos com id que 
    //nao estou deletando, ou seja, exercises recebe todos os demais elementos
    //e mostra em tela, removendo apenas o que foi deletado sem recarregar a página.
    setExercises(exercises.filter(element => element._id !== id));
  };

  const Exercise = ({ exercise }) => (
    <>
      <li className="exercise-item" encType="multipart/form-data">
        <header>
          <strong className="username-title">{exercise.username}</strong>
        </header>
        <div className="exercise-info">
          <span>Minutes: {exercise.duration}</span>
          <span>|</span>
          <span>Date: {exercise.date.substring(0, 10)}</span>
        </div>
        <div>{ReactHtmlParser(exercise.description)}</div>
        <div className="edit-delete">
          <button className="item-delete" onClick={() => {deleteExercise(exercise._id)}}>Delete</button>
          <span>|</span>
          <Link to={`/update/${exercise._id}`} className="item-edit">Edit</Link>
        </div>
      </li>
    </>
  );
  
  return (
    <main>
        <ul>
          {exercises.map(exercise => (
            <Exercise key={exercise._id} exercise={exercise} deleteExercise={deleteExercise} />
          ))}
        </ul>
    </main>
  )
}

export default ExerciseList;