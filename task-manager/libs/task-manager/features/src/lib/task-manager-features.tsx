import styles from './task-manager-features.module.css';

/* eslint-disable-next-line */
export interface TaskManagerFeaturesProps {}

export function TaskManagerFeatures(props: TaskManagerFeaturesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TaskManagerFeatures!</h1>
    </div>
  );
}

export default TaskManagerFeatures;
