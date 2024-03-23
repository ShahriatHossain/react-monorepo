import { Button, Card, useRestoreFocusTarget } from '@fluentui/react-components';
import styles from './main-header.module.css';

/* eslint-disable-next-line */
export interface MainHeaderProps {
  onCreateTask: () => void
}

export const MainHeader = (props: MainHeaderProps) => {
  const { onCreateTask } = props;
  const restoreFocusTargetAttribute = useRestoreFocusTarget();

  return (
    <>
      <h2>Task List</h2>
      <div>
        <Button appearance="primary"
          // restoreFocusTargetAttribute ensures that focus is restored to this button when the dialog closes
          {...restoreFocusTargetAttribute}
          onClick={onCreateTask}>
          Create
        </Button>
      </div>
    </>
  );
}
