import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    fetch('http://localhost:5000/students')
      .then(res => res.json())
      .then(data => setStudents(data))
  }

  useEffect(fetchStudents, [])

  return (
    <div className="App">
      hi from the frontend
    </div>
  );
}

export default App;
