import React, { useEffect, useState, ChangeEvent } from 'react';
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
  id: string,
  onClearTaskId: () => void
}

const useStyles = makeStyles({
  wrapper: {
    columnGap: "5px",
    display: "flex",
  },
});

export const TaskForm: React.FC<TaskFormProps> = observer((props) => {
  const { id, onClearTaskId } = props;

  const [enteredTitle, setEnteredTitle] = useState<string>('');
  const [enteredDescription, setEnteredDescription] = useState<string>('');

  const styles = useStyles();
  const { taskStore, dialogStore } = useStore();

  const { loadTask, createTask, updateTask } = taskStore;

  const [task, setTask] = useState<TaskFormValues>(new TaskFormValues());

  useEffect(() => {
    if (id) {
      loadTask(id).then(task => {
        if (task) {
          setTask(new TaskFormValues(task));
          setEnteredTitle(task.title);
          setEnteredDescription(task.description);
        }
      })
    } else {
      // Clear form fields when switching to "new" mode
      clearFormFields();
    }
  }, [id, loadTask]);

  const clearFormFields = () => {
    setTask(new TaskFormValues());
    setEnteredTitle('');
    setEnteredDescription('');
  };

  const handleAddTask = () => {
    const newTask = {
      id: task.id || generateRandomId(), // If task.id is undefined, generate a new ID
      title: enteredTitle,
      description: enteredDescription
    };
    const taskOperation = task.id ? updateTask(newTask) : createTask(newTask);
    taskOperation.then(() => {
      dialogStore.setDialogIsVisible(false);
      onClearTaskId();
    });
  };

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredDescription(event.target.value);
  };

  return (
    <div className={useStackClassName()}>
      <Field label="Title">
        <Input type='text' onChange={titleChangeHandler} value={enteredTitle} />
      </Field>
      <Field label="Description">
        <Textarea onChange={descriptionChangeHandler} value={enteredDescription} />
      </Field>
      <p className={styles.wrapper}>
        <Button appearance="secondary" onClick={clearFormFields}>Close</Button>
        <Button appearance="primary" onClick={handleAddTask}>Save</Button>
      </p>
    </div>
  );
});
