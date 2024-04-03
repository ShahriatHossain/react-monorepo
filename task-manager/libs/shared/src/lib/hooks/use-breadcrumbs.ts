import { useEffect, useState } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { RouteModel } from '@task-manager/task-manager-models';
import { findBreadcrumb } from "@task-manager/shared";

export const useBreadCrumbs = (routes: RouteModel[]) => {
    const [currentBreadCrumb, setCurrentBreadCrumb] = useState<RouteModel | undefined>(<RouteModel>{});
    const location = useLocation();

    useEffect(() => {
        const matchedBreadcrumb = findBreadcrumb(location.pathname);
        setCurrentBreadCrumb(matchedBreadcrumb);
    }, [location]);

    return currentBreadCrumb;
};