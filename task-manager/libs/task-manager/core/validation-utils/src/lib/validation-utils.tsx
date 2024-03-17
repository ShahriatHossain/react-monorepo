import styles from './validation-utils.module.css';

/* eslint-disable-next-line */
export interface ValidationUtilsProps {}

export function ValidationUtils(props: ValidationUtilsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ValidationUtils!</h1>
    </div>
  );
}

export default ValidationUtils;
