
import React, { ReactNode } from 'react';
import styles from './dialog.module.css';
import {
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogTrigger,
  DialogBody,
  Button,
  useRestoreFocusTarget,
} from "@fluentui/react-components";
import { AddTaskForm } from '../../add-task-form/add-task-form';

/* eslint-disable-next-line */
export interface DialogProps {
  open: boolean,
  onOpenChange: (event: any, data: any) => void,
  title: string,
  action: () => void,
  actionText: string,
  children: ReactNode // Add children prop,
  showActionButtons: boolean

}

export const ModalDialog: React.FC<DialogProps> = (props) => {
  const { open, onOpenChange, title, action, actionText, children, showActionButtons } = props;

  // Function to handle open state change
  const handleOpenChange = (event: any, data: any) => {
    onOpenChange(event, data); // Call the onOpenChange callback passed from parent
  };

  return (
    <div>
      <Dialog
        open={open} // Use the open prop from props
        onOpenChange={handleOpenChange} // Pass the handler function for open state change
      >
        <DialogSurface>
          <DialogBody>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
              {children}
            </DialogContent>

            {showActionButtons && <DialogActions>
              {/* DialogTrigger inside of a Dialog still works properly */}
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button appearance="primary" onClick={action}>{actionText}</Button>
            </DialogActions>}

          </DialogBody>
        </DialogSurface>
      </Dialog>
    </div>
  );
}

export default Dialog;
