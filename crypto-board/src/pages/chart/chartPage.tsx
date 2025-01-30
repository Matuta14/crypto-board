import { useSelector } from 'react-redux';
import { useAssetHistory } from '../../requests/assets/assets.requets';
import { ChartBox, ChartPageStyled } from './charPage.styled';
import { CoinPriceChart } from './components/coinChart';
import { selectCoin } from '../../store/assets/selector';
import { useMemo, useState } from 'react';
import { IntervalEnum } from './types';
import {
  ConvertChartData,
  getEndDateTimestamp,
} from '../../helpers/converters';
import { IAssetHistoryResponse } from '../../requests/assets/types';
import { Select } from '../../shared-components/select/select';
import { ChartIntervalOptions, ChartPeriodType } from './constants';
import Loader from '../../shared-components/loader/loader';

export const ChartPage = () => {
  const selectedCoin = localStorage.getItem('selectedCoin') || '';
  const [interval, setInterval] = useState<IntervalEnum>(IntervalEnum.oneHour);
  //TODO: make period type
  const [period, setPeriod] = useState<ChartPeriodType>(ChartPeriodType.oneDay);

  const endTime = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getUTCDate()); // Sets time to 00:00:00
  }, [period]);

  const startTime = getEndDateTimestamp(endTime.getTime(), period);

  // TODO: add erors EVERYWHERE
  const { data, isLoading } = useAssetHistory({
    id: selectedCoin,
    interval: interval,
    start: String(startTime),
    end: String(endTime.getTime()),
  });

  //TODO: remove unknown
  const ChartConvertedData = ConvertChartData(
    data || ([] as unknown as IAssetHistoryResponse)
  );

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
