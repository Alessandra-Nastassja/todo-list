import { PlusCircle } from 'phosphor-react';
import styles from './Search.module.css';
import { ChangeEvent, useState } from 'react';

export function Search() {
  const [task, setTask] = useState('');
  const [newTask, setNewTask] = useState([]);

  function handleTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setTask(event.target.value);
  }

  function addNewTask() {
    setNewTask([...task, newTask]);

    console.log(task);
    
  }

  return (
    <section className={styles.searchContent}>
      <div className={styles.search}>
        <input 
          type="text" 
          placeholder='Adicione uma nova tarefa'
          value={task}
          onChange={handleTask}/>
        <button type="submit" 
          className={styles.buttonCriarTarefa}
          onClick={addNewTask}>
          Criar
          <PlusCircle size={16} /> 
        </button>
      </div>
    </section>
  )
} 