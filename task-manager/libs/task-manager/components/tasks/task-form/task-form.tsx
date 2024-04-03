import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Field,
  Input,
  makeResetStyles,
  makeStyles,
  Textarea,
  tokens,
} from "@fluentui/react-components";

import { generateRandomId, pageSize } from '@task-manager/shared';
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
  const [isTitleValid, setIsTitleValid] = useState<boolean>(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState<boolean>(true);
  const [completed, setCompleted] = React.useState<boolean>(false);



  const styles = useStyles();
  const { taskStore, dialogStore, paginationStore } = useStore();

  const { loadTask, createTask, updateTask } = taskStore;

  const [task, setTask] = useState<TaskFormValues>(new TaskFormValues());


  useEffect(() => {
    if (id) {
      loadTask(id).then(task => {
        if (task) {
          setTask(new TaskFormValues(task));
          setEnteredTitle(task.title);
          setEnteredDescription(task.description);
          setCompleted(task.completed);
        }
      })
    } else {
      // Clear form fields when switching to "new" mode
      setTask(new TaskFormValues());
      setEnteredTitle('');
      setEnteredDescription('');
      setCompleted(false);
    }
  }, [id, loadTask]);

  function handleAddTask() {
    if (!enteredTitle.trim() || !enteredDescription.trim()) {
      // If either title or description is empty, show an error message or handle the case accordingly
      setIsTitleValid(!!enteredTitle.trim()); // Validate if title is not empty
      setIsDescriptionValid(!!enteredDescription.trim()); // Validate if description is not empty
      return;
    }

    if (!task.id) {
      let newTask = {
        id: generateRandomId(),
        title: enteredTitle,
        description: enteredDescription,
        completed: completed
      };
      createTask(newTask).then(() => handleClearForm())
    } else {

      let currentTask = {
        id: task.id,
        title: enteredTitle,
        description: enteredDescription,
        completed: completed
      };

      updateTask(currentTask).then(() => handleClearForm())
    }
  }

  const handleClearForm = () => {
    dialogStore.setDialogIsVisible(false);
    onClearTaskId();

    taskStore.loadPaginatedTasks(paginationStore.currentPage, pageSize); // Assuming pageSize is set
  }

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEnteredTitle(value);
    setIsTitleValid(!!value.trim()); // Validate if title is not empty
  }

  const descriptionChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setEnteredDescription(value);
    setIsDescriptionValid(!!value.trim()); // Validate if description is not empty
  }


  return (
    <div className={useStackClassName()}>
      <Field label="Title" required validationState={isTitleValid ? "none" : "error"} validationMessage={!isTitleValid ? "Title is required" : null}>
        <Input type='text' onChange={titleChangeHandler} value={enteredTitle} />
      </Field>
      <Field label="Description" required validationState={isDescriptionValid ? "none" : "error"} validationMessage={!isDescriptionValid ? "Description is required" : null}>
        <Textarea onChange={descriptionChangeHandler} value={enteredDescription} />
      </Field>
      <Checkbox
        checked={completed}
        onChange={(ev, data) => setCompleted(!!data?.checked)}
        label="Task Completed"
      />
      <p className={styles.wrapper}>
        <Button appearance="secondary" onClick={handleClearForm}>Close</Button>
        <Button appearance="primary" onClick={handleAddTask}>Save</Button>
      </p>
    </div>
  );
});
