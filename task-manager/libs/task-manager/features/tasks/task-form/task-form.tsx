import React, { useEffect, useState } from 'react';
import {
  Button,
  Field,
  Input,
  makeResetStyles,
  makeStyles,
  Textarea,
  tokens,
} from "@fluentui/react-components";

import { generateRandomId } from '@task-manager/task-manager-shared';
import { observer } from 'mobx-react';
import { useStore } from '@task-manager/task-manager-core';
import { TaskFormValues } from '@task-manager/task-manager-models';

const useStackClassName = makeResetStyles({
  display: "flex",
  flexDirection: "column",
  rowGap: tokens.spacingVerticalL,
});

export interface TaskFormProps {
  id: string
}

const useStyles = makeStyles({
  wrapper: {
    columnGap: "5px",
    display: "flex",
  },
});

export const TaskForm: React.FC<TaskFormProps> = observer((props) => {
  const { id } = props;

  const [enteredTitle, setEnteredTitle] = useState<string>('');
  const [enteredDescription, setEnteredDescription] = useState<string>('');

  const styles = useStyles();
  const { taskStore, dialogStore } = useStore();

  const { loadTask, createTask, updateTask } = taskStore;

  const [task, setTask] = useState<TaskFormValues>(new TaskFormValues());


  useEffect(() => {
    if (id) loadTask(id).then(task => setTask(new TaskFormValues(task)))
  }, [id, loadTask]);

  function handleAddTask() {
    if (!task.id) {
      let newTask = {
        id: generateRandomId(),
        title: enteredTitle,
        description: enteredDescription
      };
      createTask(newTask).then(() => dialogStore.setDialogIsVisible(false))
    } else {

      let currentTask = {
        id: task.id,
        title: enteredTitle,
        description: enteredDescription
      };

      updateTask(currentTask).then(() => dialogStore.setDialogIsVisible(false))
    }
  }

  const titleChangeHandler = (event: any) => {
    setEnteredTitle(event.target.value);
  }

  const descriptionChangeHandler = (event: any) => {
    setEnteredDescription(event.target.value);
  }

  return (
    <div className={useStackClassName()}>
      <Field label="Title">
        <Input type='text' onChange={titleChangeHandler} value={task.title} />
      </Field>
      <Field label="Description">
        <Textarea onChange={descriptionChangeHandler} value={task.description} />
      </Field>
      <p className={styles.wrapper}>
        <Button appearance="secondary" onClick={() => dialogStore.setDialogIsVisible(false)}>Close</Button>
        <Button appearance="primary" onClick={handleAddTask}>Save</Button>
      </p>
    </div>
  );
});
