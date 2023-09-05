import styles from './Header.module.css';

import logoTodo from '../assets/Logo.svg';

export function Header(){
  return (
    <>
      <header className={styles.header}>
        <img src={logoTodo} alt="todo" />
      </header>
    </>
  )
}