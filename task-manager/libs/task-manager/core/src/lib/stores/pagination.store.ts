import { pageSize } from '@task-manager/shared';
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
        const newTotalPages = Math.max(1, Math.ceil(totalPages / pageSize)); // Ensure totalPages is at least 1

        // Update total pages
        this.totalPages = totalPages > 0 ? newTotalPages : 1;

        // Adjust current page if it exceeds the new total pages
        if (this.currentPage > newTotalPages) {
            this.currentPage = newTotalPages;
        }
    }
}