import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './global.css';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/navbar';
import ExerciseList from './components/ExerciseList/exerciseList';
import EditExercise from './components/EditExercise/editExercise';
import CreateUser from './components/CreateUser/createUser';
import CreateExercise from './components/CreateExercise/createExercise';

const App = () => {
  return (
    <>
      <div id="app">
        <Router>
          <Navbar />
            <Route path="/" exact component={ExerciseList} />
            <Route path="/update/:id" component={EditExercise} />
            <Route path="/create" component={CreateExercise} />
            <Route path="/user" component={CreateUser} />
        </Router>
      </div>
    </>
  );
}

export default App;
