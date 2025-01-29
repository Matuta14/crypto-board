import { useSelector } from 'react-redux';
import { Select } from '../../shared-components/select/select';
import { InputWithSelect, TradePageStyled } from './tradePage.styled';
import { selectAssets } from '../../store/assets/selector';
import { convertAssetOptions } from '../../helpers/converters';
import { useMemo, useState } from 'react';
import { ISelectOption } from '../../shared-components/select/types';
import { Input } from '../../shared-components/input/input';

export const TradePage = () => {
  const assets = useSelector(selectAssets);
  const convertedData = convertAssetOptions(assets);
  const [firstCoin, setFirstCoin] = useState(convertedData[0].value);
  const [secondCoin, setSecondCoin] = useState(convertedData[1].value);
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  console.log('assets: ', assets);
  console.log('convertedData: ', convertedData);
  const onFirstCoinChange = (c: string) => {
    setFirstValue('');
    setSecondValue('');
    setFirstCoin(c);
  };

  const firstAsset = useMemo(
    () => assets.find((a) => a.id === firstCoin),
    [assets]
  );
  const secondAsset = useMemo(
    () => assets.find((a) => a.id === secondCoin),
    [assets]
  );

  const onInputChange = (value: string) => {
    setFirstValue(value);
    const enteredValue = Number(value);

    const valueInUsd = enteredValue * Number(firstAsset?.priceUsd);

    const resultValue = valueInUsd / Number(secondAsset?.priceUsd);

    setSecondValue(resultValue.toString());
  };

  const onConvertedInputChange = () => {};

  const onSecondCoinChange = (c: string) => {
    setFirstValue('');
    setSecondValue('');
    setSecondCoin(c);
  };

  return (
    <TradePageStyled>
      <InputWithSelect>
        <Select options={convertedData} onChange={onFirstCoinChange} />
        <Input onChange={onInputChange} value={firstValue} />
      </InputWithSelect>
      <InputWithSelect>
        <Select options={convertedData} onChange={onSecondCoinChange} />
        <Input onChange={onConvertedInputChange} value={secondValue} />
      </InputWithSelect>
    </TradePageStyled>
  );
};
