import { Header } from "./components/Header";

import './global.css';
import styles from './App.module.css';
import { Search } from "./components/Search";
import { Tarefas } from "./components/Tarefas";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Search />
        <Tarefas />
      </div>
    </>
  )
}