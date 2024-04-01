import { pageSize } from '@task-manager/task-manager-shared';
import { makeAutoObservable } from 'mobx';

export default class PaginationStore {
    currentPage = 1;
    totalPages = 1;

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentPage(page: number) {
        this.currentPage = page;
    }

    setTotalPages(totalPages: number) {
        // Calculate total pages based on total tasks and page size
        this.totalPages = Math.ceil(totalPages / pageSize);
    }
}