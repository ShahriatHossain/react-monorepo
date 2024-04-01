import { observer } from 'mobx-react';
import styles from './pagination.module.css';
import { useStore } from '@task-manager/task-manager-core';
import { Button } from '@fluentui/react-components';
import { CaretRightRegular, CaretLeftRegular } from '@fluentui/react-icons';
import { pageSize } from '@task-manager/task-manager-shared';

export interface PaginationProps { }

export const Pagination = observer((props: PaginationProps) => {
  const { paginationStore, taskStore } = useStore();

  const handlePrevious = () => {
    if (paginationStore.currentPage > 1) {
      paginationStore.setCurrentPage(paginationStore.currentPage - 1);
      taskStore.loadPaginatedTasks(paginationStore.currentPage, pageSize); // Assuming pageSize is set
    }
  };

  const handleNext = () => {
    if (paginationStore.currentPage < paginationStore.totalPages) {
      paginationStore.setCurrentPage(paginationStore.currentPage + 1);
      taskStore.loadPaginatedTasks(paginationStore.currentPage, pageSize); // Assuming pageSize is set
    }
  };

  return (
    <div className={styles.paginationContainer}>
      <Button
        icon={<CaretLeftRegular />}
        onClick={handlePrevious}
        title='Previous'
        disabled={paginationStore.currentPage === 1}
      />
      <span> Page {paginationStore.currentPage} of {paginationStore.totalPages} </span>
      <Button
        icon={<CaretRightRegular />}
        onClick={handleNext}
        title='Next'
        disabled={paginationStore.currentPage === paginationStore.totalPages}
      />
    </div>
  );
});
