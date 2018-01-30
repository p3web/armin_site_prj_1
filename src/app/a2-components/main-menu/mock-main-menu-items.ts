import { MainMenuItem } from './main-menu-item';

export const MAINMENUITEMS: MainMenuItem[] = [
  {
    title: 'Main',
    icon: '',
    active: true,
    groupTitle : true,
    sub: '',
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: ''
  },
  {
    title: 'Dashboards',
    icon: 'fa fa-home',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Dashboard 1',
        routing: '/default-layout/dashboard'
      },
      {
        title: 'Dashboard 2',
        routing: '/default-layout/dashboard-2'
      }
    ],
    routing: '/default-layout/dashboard',
    externalLink: '',
    budge: '2',
    budgeColor: '#f44236'
  },
  {
    title: 'Widgets',
    icon: 'fa fa-th',
    active: false,
    groupTitle : false,
    sub: '',
    routing: '/default-layout/widgets',
    externalLink: '',
    budge: '',
    budgeColor: ''
  },
  {
    title: 'Calendar',
    icon: 'fa fa-calendar',
    active: false,
    groupTitle : false,
    sub: '',
    routing: '/default-layout/calendar',
    externalLink: '',
    budge: 'New',
    budgeColor: '#008000'
  },
  {
    title: 'UI Elements',
    icon: '',
    active: false,
    groupTitle : true,
    sub: '',
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: ''
  },
  {
    title: 'Material components',
    icon: 'fa fa-briefcase',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Button',
        routing: '/default-layout/button'
      },
      {
        title: 'Card',
        routing: '/default-layout/card'
      },
      {
        title: 'Checkbox',
        routing: '/default-layout/checkbox'
      },
      {
        title: 'Chips',
        routing: '/default-layout/chips'
      },
      {
        title: 'Dialog',
        routing: '/default-layout/dialog'
      },
      {
        title: 'Icon',
        routing: '/default-layout/icon'
      },
      {
        title: 'Input',
        routing: '/default-layout/input'
      },
      {
        title: 'List',
        routing: '/default-layout/list'
      },
      {
        title: 'Menu',
        routing: '/default-layout/menu'
      },
      {
        title: 'Progress bar',
        routing: '/default-layout/progress-bar'
      },
      {
        title: 'Progress spinner',
        routing: '/default-layout/progress-spinner'
      },
      {
        title: 'Radio Button',
        routing: '/default-layout/radio-button'
      },
      {
        title: 'Select',
        routing: '/default-layout/select'
      },
      {
        title: 'Slider',
        routing: '/default-layout/slider'
      },
      {
        title: 'Slide toggle',
        routing: '/default-layout/slide-toggle'
      },
      {
        title: 'Snackbar',
        routing: '/default-layout/snackbar'
      },
      {
        title: 'Tabs',
        routing: '/default-layout/tabs'
      },
      {
        title: 'Toolbar',
        routing: '/default-layout/toolbar'
      },
      {
        title: 'Tooltip',
        routing: '/default-layout/tooltip'
      }
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: ''
  },
  {
    title: 'A2 components',
    icon: 'fa fa-diamond',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Alert',
        routing: '/default-layout/alert'
      },
      {
        title: 'Badge',
        routing: '/default-layout/badge'
      },
      {
        title: 'Breadcrumb',
        routing: '/default-layout/breadcrumb'
      },
      {
        title: 'Card',
        routing: '/default-layout/a2-card'
      },
      {
        title: 'File',
        routing: '/default-layout/file'
      }
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: ''
  },
  {
    title: 'Typography',
    icon: 'fa fa-font',
    active: false,
    groupTitle : false,
    sub: '',
    routing: '/default-layout/typography',
    externalLink: '',
    budge: '',
    budgeColor: ''
  },
  {
    title: 'Tables',
    icon: 'fa fa-table',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Simple table',
        routing: '/default-layout/simple-table'
      },
      {
        title: 'Sorting table',
        routing: '/default-layout/sorting-table'
      },
      {
        title: 'Filtering table',
        routing: '/default-layout/filtering-table'
      },
      {
        title: 'Pagination table',
        routing: '/default-layout/pagination-table'
      },
      {
        title: 'Bootstrap tables',
        routing: '/default-layout/bootstrap-tables'
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: ''
  },
  {
    title: 'Forms',
    icon: 'fa fa-check-square-o',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Form Elements',
        routing: '/default-layout/form-elements'
      },
      {
        title: 'Form Layout',
        routing: '/default-layout/form-layout'
      },
      {
        title: 'Form Validation',
        routing: '/default-layout/form-validation'
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: ''
  },
  {
    title: 'Charts',
    icon: 'fa fa-pie-chart',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Line Chart',
        routing: '/default-layout/line-chart'
      },
      {
        title: 'Bar Chart',
        routing: '/default-layout/bar-chart'
      },
      {
        title: 'Doughnut Chart',
        routing: '/default-layout/doughnut-chart'
      },
      {
        title: 'Radar Chart',
        routing: '/default-layout/radar-chart'
      },
      {
        title: 'Pie Chart',
        routing: '/default-layout/pie-chart'
      },
      {
        title: 'Polar Area Chart',
        routing: '/default-layout/polar-area-chart'
      },
      {
        title: 'Dynamic Chart',
        routing: '/default-layout/dynamic-chart'
      }
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: ''
  },
  {
    title: 'Maps',
    icon: 'fa fa-map-marker',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Google map',
        routing: '/default-layout/google-map'
      },
      {
        title: 'Leaflet map',
        routing: '/default-layout/leaflet-map'
      }
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: ''
  },
  {
    title: 'Pages',
    icon: '',
    active: false,
    groupTitle : true,
    sub: '',
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: ''
  },
  {
    title: 'Pages service',
    icon: 'fa fa-edit',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'About Us',
        routing: '/default-layout/about-us'
      },
      {
        title: 'FAQ',
        routing: '/default-layout/faq'
      },
      {
        title: 'TimeLine',
        routing: '/default-layout/timeline'
      },
      {
        title: 'Invoice',
        routing: '/default-layout/invoice'
      },
    ],
    routing: '',
    externalLink: '',
    budge: 'New',
    budgeColor: '#008000'
  },
  {
    title: 'Extra pages',
    icon: 'fa fa-clone',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Sign In',
        routing: '/extra-layout/sign-in'
      },
      {
        title: 'ُSgin up',
        routing: '/extra-layout/sign-out'
      },
      {
        title: 'Forgot password',
        routing: '/extra-layout/forget-pass'
      },
      {
        title: 'Set password',
        routing: '/extra-layout/set-pass'
      },
      {
        title: '404',
        routing: '/extra-layout/page-404'
      },
      {
        title: '500',
        routing: '/extra-layout/page-500'
      },
      {
        title: 'Not found',
        routing: '/default-layout/not-found'
      }
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: ''
  }
];
