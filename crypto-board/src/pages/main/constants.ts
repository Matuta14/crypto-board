import { IAsset } from '../../requests/assets/types';
import { IColumn } from '../../shared-components/table/types';

export const CryptoTableColumns: IColumn<IAsset>[] = [
  {
    value: 'name',
    label: 'Name',
    flex: 1,
  },

  {
    value: 'id',
    label: 'Ticker',
    right: true,
  },

  {
    value: 'priceUsd',
    label: 'Price In USD',
    right: true,
  },

  {
    value: 'changePercent24Hr',
    label: 'Change',
    right: true,
    customRender: true,
  },
];
