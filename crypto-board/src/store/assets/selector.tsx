import { IAsset } from '../../api/assets/types';

export const selectAssets = (state: { assets: { assets: IAsset[] } }) => {
  return state.assets.assets;
};

export const selectPrices = (state: { assets: { prices: [] } }) => {
  return state.assets.prices;
};
