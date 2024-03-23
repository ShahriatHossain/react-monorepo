// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.css';

import { MainHeader, TaskList } from '@task-manager/task-manager-features';
import { Card } from '@fluentui/react-components';

export function App() {
  const [dislogIsVisible, setDialogIsVisible] = useState<boolean>(false);

  const showDialogHandler = () => {
    setDialogIsVisible(true);
  }

  const hideDialogHandler = () => {
    setDialogIsVisible(false);
  }

  return (
    <Card>
      <MainHeader onCreateTask={showDialogHandler}></MainHeader>
      <main>
        <TaskList isAdding={dislogIsVisible}
          onStopAdding={hideDialogHandler} />
      </main>
    </Card>
  );
}

export default App;
