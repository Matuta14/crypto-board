export type coin = {
  batchable: boolean;
  cashInCommission: string;
  cashInFee: string;
  cashOutCommission: string;
  cryptoCode: string;
  cryptoNetwork: string;
  cryptoUnits: string;
  display: string;
  displayCode: string;
  displayScale: number;
  isCashInOnly: boolean;
  kycAuth: string;
  minimumTx: string;
  rates: coinRates;
  timestamp: string;
  unitScale: number;
  svgUrl?: string;
  background?: string;
};

export type coinRates = {
  ask: string;
  bid: string;
};
