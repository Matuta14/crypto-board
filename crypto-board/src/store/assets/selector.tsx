import { IAsset } from '../../requests/assets/types';

export const selectAssets = (state: { assets: { assets: IAsset[] } }) => {
  return state.assets.assets;
};

export const selectCoin = (state: { assets: { selectedCoin: string } }) => {
  return state.assets.selectedCoin;
};
