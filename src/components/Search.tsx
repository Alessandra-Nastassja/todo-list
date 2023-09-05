import styles from './Search.module.css';

export function Search() {
  return (
    <section className={styles.searchContent}>
      <div className={styles.search}>
        <input 
          type="text" 
          placeholder='Adicione uma nova tarefa' />
        <button type="submit">Criar</button>
      </div>
    </section>
  )
} 