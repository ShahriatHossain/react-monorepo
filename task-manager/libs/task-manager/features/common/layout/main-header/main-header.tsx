
import styles from './main-header.module.css';
import { useStore } from '@task-manager/task-manager-core';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbDivider,
  BreadcrumbButton,
  Card,
} from "@fluentui/react-components";
import {
  CalendarMonthFilled,
  CalendarMonthRegular,
  bundleIcon,
} from "@fluentui/react-icons";
import React, { useEffect, useState } from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { RouteModel } from '@task-manager/task-manager-models';
import { Breadcrumbs } from '@task-manager/task-manager-features';


/* eslint-disable-next-line */
export interface MainHeaderProps {

}

export const MainHeader = (props: MainHeaderProps) => {

  return (
    <Card>
      <Breadcrumbs />
    </Card>
  );
}
