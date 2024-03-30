// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.css';

import { MainHeader, TaskDetails, TaskList } from '@task-manager/task-manager-features';
import { Card } from '@fluentui/react-components';
import { Route, Routes } from 'react-router-dom';

export function App() {

  return (
    <Card>
      <MainHeader />
      <main>
        <Routes>
          <Route path="react-monorepo/" element={<TaskList />}></Route>
          <Route path="react-monorepo/task/:taskId" element={<TaskDetails />}></Route>
        </Routes>
      </main>
    </Card>
  );
}

export default App;
