import { IAsset } from '../../api/assets/types';
import { IColumn } from '../../shared-components/table/types';

export const CryptoTableColumns: IColumn<IAsset>[] = [
  {
    value: 'name',
    label: 'Name',
    flex: 1,
  },

  {
    value: 'symbol',
    label: 'Ticker',
    align: 'right',
  },

  {
    value: 'priceUsd',
    label: 'Price In USD',
    align: 'right',
    tooltip: true,
    customRender: true,
  },

  {
    value: 'changePercent24Hr',
    label: 'Change',
    align: 'right',
    tooltip: true,
    customRender: true,
  },
];
