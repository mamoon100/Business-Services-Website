import { Route } from '@angular/router';
import { HomePageComponent } from '../components/pages/home-page/home-page.component';
import { FeaturesComponent } from '../components/pages/features/features.component';
import { HeaderActionComponent } from '../components/main-component/header/header-action/header-action.component';
import { GeneralErrorPageComponent } from '../components/pages/general-error-page/general-error-page.component';

export const HOME_PAGE_ROUTE: Route = {
  title: 'Home',
  path: '',
  component: HomePageComponent,
};

export const FEATURES_PAGE_ROUTE: Route = {
  title: 'Features',
  path: 'features',
  component: FeaturesComponent,
};

export const ERROR_PAGE_ROUTE: Route = {
  title: 'Error',
  path: '**',
  component: GeneralErrorPageComponent,
};
