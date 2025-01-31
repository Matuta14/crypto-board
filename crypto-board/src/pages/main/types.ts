import { IAsset } from '../../api/assets/types';
import { IColumn } from '../../shared-components/table/types';

export interface Coin {
  name: string;
  ticker: string;
  price: string;
}

export enum AssetDirectionType {
  UP = 'up',
  DOWN = 'DOWN',
}

export interface IMobileTableProps {
  columns: IColumn<IAsset>[];
  data: IAsset[];
  onRowClick: Function;
}
