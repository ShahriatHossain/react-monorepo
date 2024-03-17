import React from 'react';
import { observer } from 'mobx-react-lite';
import { Task } from '../../interfaces/src/lib/task.interface';
import { taskStore } from '../../core/src/lib/task.store';

export const TaskList: React.FC = observer(() => {
  return (
    <div data-testid="task-list">
      <h2>Task List</h2>
      <ul>
        {taskStore.tasks.map((task: Task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
});
