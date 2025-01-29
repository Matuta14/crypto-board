export interface IAsset {
  id: string;
  rank: number;
  symbol: string;
  name: string;
  supply: number;
  maxSupply: number;
  marketCapUsd: number;
  volumeUsd24Hr: number;
  priceUsd: number;
  changePercent24Hr: number;
  vwap24Hr: number;
}

export interface IAssetsRequest {
  limit?: number;
  offset?: number;
  serach?: string;
  ids?: string[];
}

export interface IAssetsResponse {
  data: IAsset[];
  timestamp: number;
}

export interface IAssetHistoryRequest {
  id: string;
  interval: string;
  start?: string;
  end?: string;
}

export interface IAssetHistoryResponse {
  data: IHistoryAsset[];
  timestamp: number;
}

export interface IHistoryAsset {
  priceUsd: string;
  time: number;
}
