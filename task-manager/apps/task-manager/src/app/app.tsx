// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import {TaskList} from '../../../../libs/task-manager/features/task-list/task-list';

export function App() {
  return (
    <div>
      <TaskList />
    </div>
  );
}

export default App;
