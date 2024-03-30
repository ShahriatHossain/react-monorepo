import { useParams } from 'react-router-dom';
import styles from './task-details.module.css';
import { Body1, Subtitle2, Title3, makeStyles, shorthands } from '@fluentui/react-components';


/* eslint-disable-next-line */
export interface TaskDetailsProps {}

const useStyles = makeStyles({
  container: {
    ...shorthands.gap("16px"),
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
  },
});


export function TaskDetails(props: TaskDetailsProps) {
  // Accessing the URL parameters using useParams hook
  const { taskId } = useParams();
  const styles = useStyles();


  // Assuming tasks are fetched from an API or stored in a state
  // You can replace this with your actual data fetching logic
  const task = {
    id: taskId,
    title: "Sample Task Title",
    description: "Sample Task Description"
  };

  return (
    <div className={styles.container}>
      <h2>Task Details</h2>
      <Title3>ID: {task.id}</Title3>
      <Subtitle2>Title: {task.title}</Subtitle2>
      <Body1>Description: {task.description}</Body1>
    </div>
  );
}

export default TaskDetails;
