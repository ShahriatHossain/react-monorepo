
import React from 'react';
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

/* eslint-disable-next-line */
export interface DialogProps {
  open: boolean,
  onOpenChange: (event: any, data: any) => void
}

export function ModalDialog(props: DialogProps) {
  const { open, onOpenChange } = props; // Destructure props

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
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              exercitationem cumque repellendus eaque est dolor eius expedita
              nulla ullam? Tenetur reprehenderit aut voluptatum impedit
              voluptates in natus iure cumque eaque?
            </DialogContent>

            <DialogActions>
              {/* DialogTrigger inside of a Dialog still works properly */}
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button appearance="primary">Do Something</Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </div>
  );
}

export default Dialog;
