import { useSelector } from 'react-redux';
import { Select } from '../../shared-components/select/select';
import { InputWithSelect, TradePageStyled } from './tradePage.styled';
import { selectAssets, selectPrices } from '../../store/assets/selector';
import { convertAssetOptions } from '../../helpers/converters';
import { useMemo, useState } from 'react';
import { Input } from '../../shared-components/input/input';
import ArrowIcon from '../../assets/icons/arrowIcon';
import { Theme } from '../../theme';
import { Button } from '../../shared-components/button/button';

export const TradePage = () => {
  const assets = useSelector(selectAssets);
  const convertedData = convertAssetOptions(assets);
  const [firstCoin, setFirstCoin] = useState(convertedData?.[0].value);
  const [secondCoin, setSecondCoin] = useState(convertedData?.[1].value);
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const prices = useSelector(selectPrices);

  const onFirstCoinChange = (c: string) => {
    setFirstValue('');
    setSecondValue('');
    setFirstCoin(c);
  };

  const firstAsset = useMemo(
    () => assets?.find((a) => a.id === firstCoin),
    [assets, firstCoin]
  );
  const secondAsset = useMemo(
    () => assets?.find((a) => a.id === secondCoin),
    [assets, secondCoin]
  );

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFirstValue(value);
  };

  const onConvertedInputChange = () => {};

  const onSecondCoinChange = (c: string) => {
    setFirstValue('');
    setSecondValue('');
    setSecondCoin(c);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const valueInUsd =
      Number(firstValue) * Number(prices?.[firstAsset?.id as any]);
    const resultValue = valueInUsd / Number(prices?.[secondAsset?.id as any]);
    setSecondValue(resultValue.toString());
  };

  return (
    <TradePageStyled>
      <div className='title'>Trade Coins</div>
      <form onSubmit={handleSubmit}>
        <InputWithSelect>
          <Select
            options={convertedData}
            onChange={onFirstCoinChange}
            label=''
            value={firstCoin}
          />
          <Input
            onChange={onInputChange}
            value={firstValue}
            type='number'
            placeholder='Enter Amount'
            required
            min={0}
          />
        </InputWithSelect>
        <ArrowIcon fill={Theme.colors.MAIN_BLUE} className='arrow-icon' />
        <InputWithSelect>
          <Select
            options={convertedData}
            onChange={onSecondCoinChange}
            value={secondCoin}
            label=''
          />
          <Input
            onChange={onConvertedInputChange}
            value={secondValue}
            type='number'
          />
        </InputWithSelect>

        <Button text={'submit'} type='submit' />
      </form>
    </TradePageStyled>
  );
};
