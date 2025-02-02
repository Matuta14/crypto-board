import { useAssetHistory } from '../../api/assets/assets.requets';
import { ChartBox, ChartPageStyled } from './charPage.styled';
import { CoinPriceChart } from './components/coinChart';
import { useState } from 'react';
import { ChartPeriodType, IntervalEnum } from './types';
import {
  ConvertChartData,
  getEndDateTimestamp,
} from '../../helpers/converters';
import { Select } from '../../shared-components/select/select';
import { ChartIntervalOptions } from './constants';
import Loader from '../../shared-components/loader/loader';

export const ChartPage = () => {
  const selectedCoin = localStorage.getItem('selectedCoin') || '';
  const interval = IntervalEnum.oneHour;
  const [period, setPeriod] = useState<ChartPeriodType>(ChartPeriodType.oneDay);

  const now = new Date();
  const endTime = new Date(now.getFullYear(), now.getMonth(), now.getUTCDate());

  const startTime = getEndDateTimestamp(endTime.getTime(), period);

  const { data, isLoading } = useAssetHistory({
    id: selectedCoin,
    interval: interval,
    start: String(startTime),
    end: String(endTime.getTime()),
  });

  const ChartConvertedData = ConvertChartData(data?.data || []);

  return (
    <ChartPageStyled>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='content-box'>
          <Select
            options={ChartIntervalOptions}
            onChange={(op: ChartPeriodType) => setPeriod(op)}
            label='Choose Period'
            className='select'
          />
          <ChartBox>
            <CoinPriceChart
              priceData={ChartConvertedData.assetData}
              timeData={ChartConvertedData.timeData}
            />
          </ChartBox>
        </div>
      )}
    </ChartPageStyled>
  );
};
