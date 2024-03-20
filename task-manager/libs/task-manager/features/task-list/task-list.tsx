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
  useRestoreFocusTarget
} from '@fluentui/react-components';
import { EditRegular, DeleteRegular } from '@fluentui/react-icons';

import { useStore } from '@task-manager/task-manager-core';
import { Task } from '@task-manager/task-manager-models';
import { ModalDialog } from '../common/dialog/dialog';

const columns = [
  { columnKey: 'id', label: 'ID' },
  { columnKey: 'title', label: 'Title' },
  { columnKey: 'description', label: 'Description' },
  { columnKey: 'actions', label: 'Actions' },
];

export const TaskList: React.FC = observer(() => {
  const [open, setOpen] = React.useState(false);
  const restoreFocusTargetAttribute = useRestoreFocusTarget();
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
        <Button appearance="primary" style={{ float: 'right' }}
          // restoreFocusTargetAttribute ensures that focus is restored to this button when the dialog closes
          {...restoreFocusTargetAttribute}
          onClick={() => {
            // it is the user responsibility to open the dialog
            setOpen(true);
          }}>
          Create
        </Button>

        <ModalDialog  // this controls the dialog open state
          open={open}
          onOpenChange={(event, data) => {
            // it is the users responsibility to react accordingly to the open state change
            setOpen(data.open);
          }}></ModalDialog>
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
