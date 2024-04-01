import { useParams } from 'react-router-dom';
import styles from './task-details.module.css';
import { Body1, Subtitle2, Title3, makeStyles, shorthands } from '@fluentui/react-components';
import { useEffect, useState } from 'react';
import { useStore } from '@task-manager/task-manager-core';
import { Task } from '@task-manager/task-manager-models';


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

  const { taskStore } = useStore();

  const { loadTask } = taskStore;

  const [task, setTask] = useState<Task>(new Task());

  useEffect(() => {
    if (taskId) {
      loadTask(taskId).then(task => {
        if (task) {
          setTask(new Task(task));
        }
      })
    } 
  }, [taskId, loadTask]);

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
