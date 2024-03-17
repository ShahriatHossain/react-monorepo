import styles from './task-manager-shared.module.css';

/* eslint-disable-next-line */
export interface TaskManagerSharedProps {}

export function TaskManagerShared(props: TaskManagerSharedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TaskManagerShared!</h1>
    </div>
  );
}

export default TaskManagerShared;
