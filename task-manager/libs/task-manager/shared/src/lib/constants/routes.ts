import { RouteModel } from "@task-manager/task-manager-models";

export const breadcrumbData = <RouteModel[]>[
    { path: '/react-monorepo/', breadcrumb: 'Home' },
    { path: '/react-monorepo/task/:taskId', root: '/react-monorepo/', rootBreadcrumb: 'Home', breadcrumb: 'Task Details' },
    // Add more breadcrumb data as needed
];