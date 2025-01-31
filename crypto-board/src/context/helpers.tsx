export const coins = [
  'bitcoin',
  'ethereum',
  'xrp',
  'tether',
  'solana',
  'binance-coin',
  'usd-coin',
  'dogecoin',
  'cardano',
  'steth',
];

export const getWsPath = (path: string) => {
  let newPath = `${path}/prices?assets=`;
  for (let i = 0; i < coins?.length; i++) {
    if (i > 0) {
      newPath += ',';
    }
    newPath += coins?.[i];
  }

  return newPath;
};
