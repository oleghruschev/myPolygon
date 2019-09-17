import Articles from 'components/pages/Articles';
import Page2 from 'components/pages/Page2';

const routes: object[] = [
  {
    path: '/',
    exact: true,
    component: Articles
  },
  {
    path: '/page2',
    exact: true,
    component: Page2
  }
];

export default routes;
