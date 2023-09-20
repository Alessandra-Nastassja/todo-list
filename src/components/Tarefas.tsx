import styles from './Tarefas.module.css';

export function Tarefas(){
  return (
    <section className={styles.tarefasContent}>
      <div className={styles.tarefasCriadas}>
        <p>Tarefas criadas</p>
        <span>0</span>
      </div>
      <div className={styles.tarefasConcluidas}>
        <p>Tarefas concluídas</p>
        <span>0</span>
      </div>
    </section>
  )
}