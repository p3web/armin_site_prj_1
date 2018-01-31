import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { DefaultLayoutComponent }       from './layouts/default/default.component';
import { ExtraLayoutComponent }         from './layouts/extra/extra.component';

import { PageDashboardComponent }       from './pages/dashboard/dashboard.component';
import { PageDashboard2Component }      from './pages/dashboard-2/dashboard-2.component';
import { PageButtonComponent }          from './pages/material-components/button/button.component';
import { PageCardComponent }            from './pages/material-components/card/card.component';
import { PageCheckboxComponent }        from './pages/material-components/checkbox/checkbox.component';
import { PageChipsComponent }           from './pages/material-components/chips/chips.component';
import { PageDialogComponent }          from './pages/material-components/dialog/dialog.component';
import { PageIconComponent }            from './pages/material-components/icon/icon.component';
import { PageInputComponent }           from './pages/material-components/input/input.component';
import { PageListComponent }            from './pages/material-components/list/list.component';
import { PageMenuComponent }            from './pages/material-components/menu/menu.component';
import { PageProgressBarComponent }     from './pages/material-components/progress-bar/progress-bar.component';
import { PageProgressSpinnerComponent } from './pages/material-components/progress-spinner/progress-spinner.component';
import { PageRadioButtonComponent }     from './pages/material-components/radio-button/radio-button.component';
import { PageSelectComponent }          from './pages/material-components/select/select.component';
import { PageSliderComponent }          from './pages/material-components/slider/slider.component';
import { PageSlideToggleComponent }     from './pages/material-components/slide-toggle/slide-toggle.component';
import { PageSnackbarComponent }        from './pages/material-components/snackbar/snackbar.component';
import { PageTabsComponent }            from './pages/material-components/tabs/tabs.component';
import { PageToolbarComponent }         from './pages/material-components/toolbar/toolbar.component';
import { PageTooltipComponent }         from './pages/material-components/tooltip/tooltip.component';

import { PageAlertComponent }           from './pages/a2-components/alert/alert.component';
import { PageBadgeComponent }           from './pages/a2-components/badge/badge.component';
import { PageBreadcrumbComponent }      from './pages/a2-components/breadcrumb/breadcrumb.component';
import { PageA2CardComponent }          from './pages/a2-components/a2-card/a2-card.component';
import { PageFileComponent }            from './pages/a2-components/file/file.component';

import { PageTypographyComponent }      from './pages/typography/typography.component';
import { PageNotFoundComponent }        from './pages/not-found/not-found.component';

import { PageSignIn1Component }         from './pages/extra-pages/sign-in-1/sign-in-1.component';
import { PageSignIn2Component }         from './pages/extra-pages/sign-in-2/sign-in-2.component';
import { PageSignIn3Component }         from './pages/extra-pages/sign-in-3/sign-in-3.component';
import { PageSignUp1Component }         from './pages/extra-pages/sign-up-1/sign-up-1.component';
import { PageSignUp2Component }         from './pages/extra-pages/sign-up-2/sign-up-2.component';
import { PageForgotComponent }          from './pages/extra-pages/forgot/forgot.component';
import { PageConfirmComponent }         from './pages/extra-pages/confirm/confirm.component';
import { Page404Component }             from './pages/extra-pages/page-404/page-404.component';
import { Page500Component }             from './pages/extra-pages/page-500/page-500.component';
import { PageAboutUsComponent }         from './pages/pages-service/about-us/about-us.component';
import { PageFaqComponent }             from './pages/pages-service/faq/faq.component';
import { PageTimelineComponent }        from './pages/pages-service/timeline/timeline.component';
import { PageInvoiceComponent }         from './pages/pages-service/invoice/invoice.component';
import { PageLineChartComponent }       from './pages/charts/line-chart/line-chart.component';
import { PageBarChartComponent }        from './pages/charts/bar-chart/bar-chart.component';
import { PageDoughnutChartComponent }   from './pages/charts/doughnut-chart/doughnut-chart.component';
import { PageRadarChartComponent }      from './pages/charts/radar-chart/radar-chart.component';
import { PagePieChartComponent }        from './pages/charts/pie-chart/pie-chart.component';
import { PagePolarAreaChartComponent }  from './pages/charts/polar-area-chart/polar-area-chart.component';
import { PageDynamicChartComponent }    from './pages/charts/dynamic-chart/dynamic-chart.component';
import { PageCalendarComponent }        from './pages/calendar/calendar.component';
import { PageSimpleTableComponent }     from './pages/tables/simple-table/simple-table.component';
import { PageBootstrapTablesComponent } from './pages/tables/bootstrap-tables/bootstrap-tables.component';
import { PageSortingTableComponent }    from './pages/tables/sorting-table/sorting-table.component';
import { PageFilteringTableComponent }  from './pages/tables/filtering-table/filtering-table.component';
import { PagePaginationTableComponent } from './pages/tables/pagination-table/pagination-table.component';
import { PageFormElementsComponent }    from './pages/forms/form-elements/form-elements.component';
import { PageFormLayoutComponent }      from './pages/forms/form-layout/form-layout.component';
import { PageFormValidationComponent }  from './pages/forms/form-validation/form-validation.component';
import { PageGoogleMapComponent }       from './pages/maps/google-map/google-map.component';
import { PageLeafletMapComponent }      from './pages/maps/leaflet-map/leaflet-map.component';
import { PageWidgetsComponent }         from './pages/widgets/widgets.component';

// Pooria (CyberDev)
import {LoginComponent} from './pages/extra-pages/login/login.component';
import {LostPasswordComponent} from './pages/extra-pages/lost-password/lost-password.component';
import {SignupComponent} from './pages/extra-pages/signup/signup.component';
import {SetPasswordComponent} from './pages/extra-pages/set-password/set-password.component';

import {IntroductionComponent} from './pages/intake/introduction/introduction.component'
import { CompanyDetailsComponent } from './pages/intake/company-details/company-details.component';

const intakeRoutes: Routes = [
  { path: 'introduction', component: IntroductionComponent },
  { path: 'company_information', component: CompanyDetailsComponent }
]

const defaultRoutes: Routes = [
  { path: 'dashboard', component: PageDashboardComponent },
  { path: 'dashboard-2', component: PageDashboard2Component },
  { path: 'typography', component: PageTypographyComponent },
  { path: 'widgets', component: PageWidgetsComponent },
  { path: 'calendar', component: PageCalendarComponent },
  { path: 'button', component: PageButtonComponent },
  { path: 'card', component: PageCardComponent },
  { path: 'checkbox', component: PageCheckboxComponent },
  { path: 'chips', component: PageChipsComponent },
  { path: 'dialog', component: PageDialogComponent },
  { path: 'icon', component: PageIconComponent },
  { path: 'input', component: PageInputComponent },
  { path: 'list', component: PageListComponent },
  { path: 'menu', component: PageMenuComponent },
  { path: 'progress-bar', component: PageProgressBarComponent },
  { path: 'progress-spinner', component: PageProgressSpinnerComponent },
  { path: 'radio-button', component: PageRadioButtonComponent },
  { path: 'select', component: PageSelectComponent },
  { path: 'slider', component: PageSliderComponent },
  { path: 'slide-toggle', component: PageSlideToggleComponent },
  { path: 'snackbar', component: PageSnackbarComponent },
  { path: 'tabs', component: PageTabsComponent },
  { path: 'toolbar', component: PageToolbarComponent },
  { path: 'tooltip', component: PageTooltipComponent },
  { path: 'file', component: PageFileComponent },
  { path: 'a2-card', component: PageA2CardComponent },
  { path: 'alert', component: PageAlertComponent },
  { path: 'badge', component: PageBadgeComponent },
  { path: 'breadcrumb', component: PageBreadcrumbComponent },
  { path: 'sign-in', component: PageSignIn2Component },
  { path: 'sign-up', component: PageSignUp2Component },
  { path: 'about-us', component: PageAboutUsComponent },
  { path: 'faq', component: PageFaqComponent },
  { path: 'timeline', component: PageTimelineComponent },
  { path: 'invoice', component: PageInvoiceComponent },
  { path: 'line-chart', component: PageLineChartComponent },
  { path: 'bar-chart', component: PageBarChartComponent },
  { path: 'doughnut-chart', component: PageDoughnutChartComponent },
  { path: 'radar-chart', component: PageRadarChartComponent },
  { path: 'pie-chart', component: PagePieChartComponent },
  { path: 'polar-area-chart', component: PagePolarAreaChartComponent },
  { path: 'dynamic-chart', component: PageDynamicChartComponent },
  { path: 'simple-table', component: PageSimpleTableComponent },
  { path: 'bootstrap-tables', component: PageBootstrapTablesComponent },
  { path: 'sorting-table', component: PageSortingTableComponent },
  { path: 'filtering-table', component: PageFilteringTableComponent },
  { path: 'pagination-table', component: PagePaginationTableComponent },
  { path: 'form-elements', component: PageFormElementsComponent },
  { path: 'form-layout', component: PageFormLayoutComponent },
  { path: 'form-validation', component: PageFormValidationComponent },
  { path: 'google-map', component: PageGoogleMapComponent },
  { path: 'leaflet-map', component: PageLeafletMapComponent },
  { path: '**', component: PageNotFoundComponent },
];

const extraRoutes: Routes = [
  // pooria (CyberDev)
  { path: 'sign-in', component: LoginComponent },
  { path: 'forget-pass', component: LostPasswordComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'set-pass', component: SetPasswordComponent },

  { path: 'confirm', component: PageConfirmComponent },
  { path: 'page-404', component: Page404Component },
  { path: 'page-500', component: Page500Component },
];

const routes: Routes = [
  {
    path : 'intake',
    component : DefaultLayoutComponent,
    children : intakeRoutes
  },
  {
    path: '',
    redirectTo: '/default-layout/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'default-layout',
    component: DefaultLayoutComponent,
    children: defaultRoutes
  },
  {
    path: 'extra-layout',
    component: ExtraLayoutComponent,
    children: extraRoutes
  },
  {
    path: '**',
    component: DefaultLayoutComponent,
    children: defaultRoutes
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
