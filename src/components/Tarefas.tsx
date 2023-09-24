import { Trash } from 'phosphor-react';
import styles from './Tarefas.module.css';

export function Tarefas(){
  return (
    <section>
      <div className={styles.tarefasContent}>
        <div className={styles.tarefasCriadas}>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div className={styles.tarefasConcluidas}>
          <p>Tarefas concluídas</p>
          <span>0</span>
        </div>
      </div>

      <div className={styles.semTarefas}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
      <div className={styles.comTarefas}>
        <div className={styles.textTarefa}>
          <input type="checkbox" />
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        </div>
        <Trash size={16} />
      </div>
    </section>
  )
}