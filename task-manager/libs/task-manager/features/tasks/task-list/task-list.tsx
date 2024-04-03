import React, { useEffect, useState } from 'react';
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
  makeStyles,
  useArrowNavigationGroup,
  useFocusableGroup,
  useRestoreFocusTarget
} from '@fluentui/react-components';
import { EditRegular, DeleteRegular, ContentViewGalleryRegular, CheckmarkRegular } from '@fluentui/react-icons';

import { useStore } from '@task-manager/task-manager-core';
import { Task } from '@task-manager/task-manager-models';
import { ModalDialog } from '../../common/dialog/dialog';
import { TaskForm } from '../task-form/task-form';
import { Link } from 'react-router-dom';
import { LoadingSpinner, Pagination } from '@task-manager/task-manager-features';
import { pageSize } from '@task-manager/task-manager-shared';

const columns = [
  { columnKey: 'id', label: 'ID' },
  { columnKey: 'title', label: 'Title' },
  { columnKey: 'description', label: 'Description' },
  { columnKey: 'actions', label: 'Actions' },
];

/* eslint-disable-next-line */
export interface TaskListProps {
}

export const TaskList: React.FC<TaskListProps> = observer((props) => {
  const keyboardNavAttr = useArrowNavigationGroup({ axis: 'grid' });
  const focusableGroupAttr = useFocusableGroup({
    tabBehavior: 'limited-trap-focus',
  });

  const { taskStore, dialogStore, paginationStore } = useStore();

  const restoreFocusTargetAttribute = useRestoreFocusTarget();

  const onCreateTaskHandler = () => {
    dialogStore.setDialogIsVisible(true);
  }

  const [taskId, setTaskId] = useState<string>('');
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [currentDeleteId, setCurrentDeleteId] = useState<string>('');

  useEffect(() => {
    paginationStore.setTotalPages(taskStore.totalTasks);
  }, [paginationStore, taskStore.totalTasks]);

  const editTaskHandler = (id: string) => {
    setTaskId(id);
    dialogStore.setDialogIsVisible(true);
  }

  const onOpenChangeHandler = () => {
    dialogStore.setDialogIsVisible(false);
  }

  const onClearDeleteFlagHandler = () => {
    setConfirmDelete(false);
    setCurrentDeleteId('');
  }

  const onClearTaskIdHandler = () => {
    setTaskId(prevState => '')
  }

  const completeTaskHandler = (item: Task) => {
    let currentTask = {
      id: item.id,
      title: item.title,
      description: item.description,
      completed: !item.completed
    };

    taskStore.updateTask(currentTask).then(() => taskStore.loadPaginatedTasks(paginationStore.currentPage, pageSize))
  }

  const confirmDeleteHandler = (id: string) => {
    setConfirmDelete(true);
    setCurrentDeleteId(id);
  }

  return (
    <Card>
      <h2>Task List</h2>
      <div>
        <Button appearance="primary"
          // restoreFocusTargetAttribute ensures that focus is restored to this button when the dialog closes
          {...restoreFocusTargetAttribute}
          onClick={onCreateTaskHandler}>
          Create
        </Button>
      </div>

      <div>
        {confirmDelete && <ModalDialog
          open={confirmDelete}
          onOpenChange={onClearDeleteFlagHandler}
          title="Delete Confirmation"
          action={() => {
            taskStore.deleteTask(currentDeleteId);
            onClearDeleteFlagHandler();
          }}
          actionText="Confirm Delete"
          showActionButtons={true}
        >
          Are you sure, you want to delete this item?
        </ModalDialog>}
      </div>

      <div>
        {dialogStore.dislogIsVisible && <ModalDialog
          open={dialogStore.dislogIsVisible}
          onOpenChange={onOpenChangeHandler}
          title="Add Task"
          action={() => console.log("Action clicked")}
          actionText="Save"
          showActionButtons={false}
        >
          <TaskForm id={taskId} onClearTaskId={onClearTaskIdHandler}></TaskForm>
        </ModalDialog>}
      </div>

      <LoadingSpinner label='Loading task...' loading={taskStore.loadingInitial} />

      <React.Fragment>
        {taskStore.tasks.length === 0 ? (
          <div>No record found</div>
        ) : (
          <React.Fragment>
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
                        <Button icon={<EditRegular />} title='Edit' aria-label="Edit" onClick={() => editTaskHandler(item.id)} />
                        <Button icon={<DeleteRegular />} title='Delete' aria-label="Delete" onClick={() => confirmDeleteHandler(item.id)} />
                        <Link to={`/react-monorepo/task/${item.id}`}>
                          <Button icon={<ContentViewGalleryRegular />} title='Details' aria-label="Details" />
                        </Link>
                        <Button style={item.completed ? { color: 'green' } : {}} icon={<CheckmarkRegular />} title={item.completed? 'Task completed': 'Please complete task'} aria-label="Complete Task" onClick={() => completeTaskHandler(item)} />
                      </TableCellLayout>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination />
          </React.Fragment>
        )}
      </React.Fragment>
    </Card >
  );
});
