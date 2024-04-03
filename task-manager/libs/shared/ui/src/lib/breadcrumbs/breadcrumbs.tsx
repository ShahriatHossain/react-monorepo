import { Link, NavLink } from 'react-router-dom';
import styles from './breadcrumbs.module.css';
import { breadcrumbData, useBreadCrumbs } from '@task-manager/shared';
import { Breadcrumb, BreadcrumbButton, BreadcrumbDivider, BreadcrumbItem } from '@fluentui/react-components';

/* eslint-disable-next-line */
export interface BreadcrumbsProps { }

export function Breadcrumbs(props: BreadcrumbsProps) {

  const currentRoute = useBreadCrumbs(breadcrumbData);

  return (
    <Breadcrumb>
      {currentRoute && currentRoute.root && <><BreadcrumbItem>
        <Link to={currentRoute.root}><BreadcrumbButton>{currentRoute.rootBreadcrumb}</BreadcrumbButton></Link>
      </BreadcrumbItem><BreadcrumbDivider /></>}

      {currentRoute && <BreadcrumbItem>
        <BreadcrumbButton current>
          {currentRoute.breadcrumb}
        </BreadcrumbButton>
      </BreadcrumbItem>}
    </Breadcrumb>


  );
}

export default Breadcrumbs;
