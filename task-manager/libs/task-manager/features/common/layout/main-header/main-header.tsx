import { Button, Card, useRestoreFocusTarget } from '@fluentui/react-components';
import styles from './main-header.module.css';
import { useStore } from '@task-manager/task-manager-core';

/* eslint-disable-next-line */
export interface MainHeaderProps {

}

export const MainHeader = (props: MainHeaderProps) => {

  const restoreFocusTargetAttribute = useRestoreFocusTarget();

  const { dialogStore } = useStore();

  const onCreateTaskHandler = () => {
    dialogStore.setDialogIsVisible(true);
  }

  return (
    <>
      <h2>Task List</h2>
      <div>
        <Button appearance="primary"
          // restoreFocusTargetAttribute ensures that focus is restored to this button when the dialog closes
          {...restoreFocusTargetAttribute}
          onClick={onCreateTaskHandler}>
          Create
        </Button>
      </div>
    </>
  );
}
