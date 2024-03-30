import styles from './date-utils.module.css';

/* eslint-disable-next-line */
export interface DateUtilsProps {}

export function DateUtils(props: DateUtilsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DateUtils!</h1>
    </div>
  );
}

export default DateUtils;
