import { Spinner } from '@fluentui/react-components';
import styles from './spinner.module.css';

/* eslint-disable-next-line */
export interface SpinnerProps {
  label: string;
  loading: boolean;
}

export function LoadingSpinner({ label, loading }: SpinnerProps) {
  return loading ? <Spinner label={label} /> : null;

}

export default LoadingSpinner;
