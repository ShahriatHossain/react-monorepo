import React from 'react';
import {
  Checkbox,
  Combobox,
  Field,
  Input,
  makeResetStyles,
  Option,
  Radio,
  RadioGroup,
  Slider,
  SpinButton,
  Switch,
  Textarea,
  tokens,
} from "@fluentui/react-components";

const useStackClassName = makeResetStyles({
  display: "flex",
  flexDirection: "column",
  rowGap: tokens.spacingVerticalL,
});

export const AddTaskForm: React.FC = () => {
  return (
    <div className={useStackClassName()}>
    <Field label="Title">
      <Input />
    </Field>
    <Field label="Description">
      <Textarea />
    </Field>
  </div>
  );
};
