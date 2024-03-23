import React, { useState } from 'react';
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

const useStackClassName = makeResetStyles({
  display: "flex",
  flexDirection: "column",
  rowGap: tokens.spacingVerticalL,
});

export interface AddTaskFormProps {
  onCancel: () => void
}

const useStyles = makeStyles({
  wrapper: {
    columnGap: "5px",
    display: "flex",
  },
});

export const EditTask: React.FC<AddTaskFormProps> = observer((props) => {
  const [enteredTitle, setEnteredTitle] = useState<string>('');
  const [enteredDescription, setEnteredDescription] = useState<string>('');
  const { onCancel } = props;

  const styles = useStyles();
  const { taskStore } = useStore();

  const titleChangeHandler = (event: any) => {
    setEnteredTitle(event.target.value);
  }

  const descriptionChangeHandler = (event: any) => {
    setEnteredDescription(event.target.value);
  }

  const handleAddTask = () => {
    const taskData = {
      id: generateRandomId(),
      title: enteredTitle,
      description: enteredDescription
    };

    taskStore.createTask(taskData);
    onCancel();
  }

  return (
    <div className={useStackClassName()}>
      <Field label="Title">
        <Input type='text' onChange={titleChangeHandler} />
      </Field>
      <Field label="Description">
        <Textarea onChange={descriptionChangeHandler} />
      </Field>
      <p className={styles.wrapper}>
        <Button appearance="secondary" onClick={onCancel}>Close</Button>
        <Button appearance="primary" onClick={handleAddTask}>Save</Button>
      </p>
    </div>
  );
});
