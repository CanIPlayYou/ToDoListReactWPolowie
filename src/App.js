import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const zadanie=[{
  nazwaZadania: "Zrobić zakupy",
},
{
  nazwaZadania: "Kupic mleko",
}]

function App() {
  return (
    <div className='Main'>

      <div className='NavBar'>
        <h1>Lista rzeczy do zrobienia!</h1>
      </div>

      <div className='MainContent'>

        <div className='ContentLeft'>
          <WypisanieZadan/>
        </div>

        <div className='ContentRight'>
          
        </div>

      </div>

    </div>
  );
}

function WypisanieZadan(){
  const [tasks, setTasks] = useState(zadanie);

  const toggleTask = (index) => {  // Funkcja zmieniająca stan zadania na zrobione/nie zrobione
    const updatedTasks = [...tasks]; // Tworzenie kopii tablicy tasks za pomocą operatora rozpraszania(...)
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  return(
    <div>
      <h2>Twoje zadania:</h2>

      <ul className='zadanLista'>
        <div>
          {zadanie.map((task, index) => (
            <li key={index} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.nazwaZadania}{' '} <button className='btn btn-dark btn-sm' onClick={() => toggleTask(index)}>{task.done ? 'Niezrobione' : 'Zrobione'}</button></li>
          ))}
          
        </div>
      </ul>
    </div>
  );
}
export default App;
