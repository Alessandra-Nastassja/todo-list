import { Header } from "./components/Header";

import './global.css';
import styles from './App.module.css';
import { Search } from "./components/Search";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Search />
      </div>
    </>
  )
}