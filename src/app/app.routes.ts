import { Routes } from '@angular/router';
import {
  HOME_PAGE_ROUTE,
  FEATURES_PAGE_ROUTE,
  ERROR_PAGE_ROUTE,
} from './constant/RoutesConstant';

export const routes: Routes = [
  HOME_PAGE_ROUTE,
  FEATURES_PAGE_ROUTE,
  ERROR_PAGE_ROUTE, // this must be the last one
];
