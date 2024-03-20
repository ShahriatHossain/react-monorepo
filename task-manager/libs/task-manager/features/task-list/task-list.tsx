import React from 'react';
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
} from '@fluentui/react-components';
import { EditRegular, DeleteRegular } from '@fluentui/react-icons';

import { useStore } from '@task-manager/task-manager-core';
import { Task } from '@task-manager/task-manager-models';

const columns = [
  { columnKey: 'id', label: 'ID' },
  { columnKey: 'title', label: 'Title' },
  { columnKey: 'description', label: 'Description' },
  { columnKey: 'actions', label: 'Actions' },
];

export const TaskList: React.FC = observer(() => {
  const keyboardNavAttr = useArrowNavigationGroup({ axis: 'grid' });
  const focusableGroupAttr = useFocusableGroup({
    tabBehavior: 'limited-trap-focus',
  });

  const { taskStore } = useStore();
  const { getTasks } = taskStore;

  return (
    <Card>
      <h2>Task List</h2>
      <div>
        <Button appearance="primary" style={{ float: 'right' }}>
          Create
        </Button>
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
          {getTasks().map((item: Task) => (
            <TableRow key={item.id}>
              <TableCell tabIndex={0} role="gridcell">
                <TableCellLayout>{item.title}</TableCellLayout>
              </TableCell>
              <TableCell role="gridcell" tabIndex={0} {...focusableGroupAttr}>
                <TableCellLayout>
                  <Button icon={<EditRegular />} aria-label="Edit" />
                  <Button icon={<DeleteRegular />} aria-label="Delete" />
                </TableCellLayout>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
});
