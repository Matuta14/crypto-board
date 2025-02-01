import { IAsset, IHistoryAsset } from '../api/assets/types';

export const ConvertChartData = (data: IHistoryAsset[]) => {
  const assetData: number[] = [];
  const timeData: string[] = [];
  data?.forEach((asset: IHistoryAsset) => {
    assetData.push(Number(asset.priceUsd));
    timeData.push(convertTimestampToDate(asset.time));
  });

  return { assetData: assetData, timeData: timeData };
};

export const convertTimestampToDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);

  return `${day}/${month}/${year}`;
};

export const getEndDateTimestamp = (currentTimeMs: number, period: number) => {
  const periodInMilliseconds = period * 24 * 60 * 60 * 1000; // Convert days to milliseconds

  const now = new Date();
  console.log('now: ', now);
  console.log(
    'ans in date: ',
    convertTimestampToDate(currentTimeMs - periodInMilliseconds)
  );
  return currentTimeMs - periodInMilliseconds;
};

export const convertAssetOptions = (assets: IAsset[]) => {
  return assets?.map((a: IAsset) => {
    return { label: a?.name, value: a?.id };
  });
};

// TODO: Check reduce
export function convertDataToPriceMap(data: IAsset[]): {
  [key: string]: string;
} {
  return data.reduce((acc, { id, priceUsd }) => {
    acc[id] = String(priceUsd);
    return acc;
  }, {} as { [key: string]: string });
}
