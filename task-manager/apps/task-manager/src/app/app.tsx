// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.css';

import { MainHeader, TaskList } from '@task-manager/task-manager-features';
import { Card } from '@fluentui/react-components';

export function App() {

  return (
    <Card>
      <MainHeader />
      <main>
        <TaskList />
      </main>
    </Card>
  );
}

export default App;
