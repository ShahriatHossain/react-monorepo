import styles from './task-list-item.module.css';

/* eslint-disable-next-line */
export interface TaskListItemProps {}

export function TaskListItem(props: TaskListItemProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TaskListItem!</h1>
    </div>
  );
}

export default TaskListItem;
