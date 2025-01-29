import { ChartPage } from './pages/chart/chartPage';
import { MainPage } from './pages/main/mainPage';
import { TradePage } from './pages/trade/tradePage';

const routesMap: IRoute[] = [
  {
    path: '/',
    Component: MainPage,
  },
  {
    path: '/trade',
    Component: TradePage,
  },
  {
    path: '/chart',
    Component: ChartPage,
  },
];

export interface IRoute {
  path: string;
  Component: any;
}

export default routesMap;
