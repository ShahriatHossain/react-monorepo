import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  Avatar,
  Button,
  Card,
  PresenceBadgeStatus,
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableHeaderCell,
  TableRow,
  useArrowNavigationGroup,
  useFocusableGroup,
  useRestoreFocusTarget
} from '@fluentui/react-components';
import { EditRegular, DeleteRegular } from '@fluentui/react-icons';

import { useStore } from '@task-manager/task-manager-core';
import { Task } from '@task-manager/task-manager-models';
import { ModalDialog } from '../common/dialog/dialog';
import { AddTaskForm } from '../add-task-form/add-task-form';
import { EditTask } from '../edit-task/edit-task';

const columns = [
  { columnKey: 'id', label: 'ID' },
  { columnKey: 'title', label: 'Title' },
  { columnKey: 'description', label: 'Description' },
  { columnKey: 'actions', label: 'Actions' },
];

/* eslint-disable-next-line */
export interface TaskListProps {
  isAdding: boolean,
  onStopAdding: () => void
}

export const TaskList: React.FC<TaskListProps> = observer((props) => {
  const { isAdding, onStopAdding } = props;
  const keyboardNavAttr = useArrowNavigationGroup({ axis: 'grid' });
  const focusableGroupAttr = useFocusableGroup({
    tabBehavior: 'limited-trap-focus',
  });

  const { taskStore } = useStore();



  return (
    <Card>
      <div>
        {isAdding && <ModalDialog
          open={isAdding}
          onOpenChange={onStopAdding}
          title="Add Task"
          action={() => console.log("Action clicked")}
          actionText="Save"
          showActionButtons={false}
        >
          <AddTaskForm onCancel={onStopAdding}></AddTaskForm>
        </ModalDialog>}

        {isAdding && <ModalDialog
          open={isAdding}
          onOpenChange={onStopAdding}
          title="Edit Task"
          action={() => console.log("Action clicked")}
          actionText="Save"
          showActionButtons={false}
        >
          <EditTask onCancel={onStopAdding}></EditTask>
        </ModalDialog>}

      </div>

      <Table
        {...keyboardNavAttr}
        role="grid"
        aria-label="Table with grid keyboard navigation"
      >
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHeaderCell key={column.columnKey}>
                {column.label}
              </TableHeaderCell>
            ))}
            <TableHeaderCell />
          </TableRow>
        </TableHeader>
        <TableBody>
          {taskStore.tasks.map((item: Task) => (
            <TableRow key={item.id}>
              <TableCell tabIndex={0} role="gridcell">
                <TableCellLayout>{item.id}</TableCellLayout>
              </TableCell>
              <TableCell tabIndex={0} role="gridcell">
                <TableCellLayout>{item.title}</TableCellLayout>
              </TableCell>
              <TableCell tabIndex={0} role="gridcell">
                <TableCellLayout>{item.description}</TableCellLayout>
              </TableCell>
              <TableCell role="gridcell" tabIndex={0} {...focusableGroupAttr}>
                <TableCellLayout>
                  <Button icon={<EditRegular />} aria-label="Edit" />
                  <Button icon={<DeleteRegular />} aria-label="Delete" onClick={()=> taskStore.deleteTask(item.id)} />
                </TableCellLayout>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card >
  );
});
