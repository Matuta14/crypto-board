import { useDispatch } from 'react-redux';
import { useAssets } from '../../requests/assets/assets.requets';
import { Table } from '../../shared-components/table/table';
import { PercentTableCell } from './components/percentTableCell';
import { CryptoTableColumns } from './constants';
import { FilterBox, MainPageStyled, TableBox } from './mainPage.styled';
import { setCoin } from '../../store/assets/slice';
import { useNavigate } from 'react-router-dom';
import Loader from '../../shared-components/loader/loader';
import { Input } from '../../shared-components/input/input';
import { useMemo, useState } from 'react';

export const MainPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const { data, isLoading } = useAssets({ limit: 10 });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredData =
    data?.data?.filter(
      (asset) =>
        asset.id.includes(searchValue) ||
        asset.name.includes(searchValue) ||
        asset.symbol.includes(searchValue)
    ) || [];

  const onSearchChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value.target.value);
  };

  const onRowClick = (coin: string) => {
    dispatch(setCoin(coin));
    navigate('/chart');
    localStorage.setItem('selectedCoin', coin);
  };

  return (
    <MainPageStyled>
      {isLoading ? (
        <Loader />
      ) : (
        <TableBox>
          <FilterBox>
            <Input
              label='Search Coin'
              value={searchValue}
              onChange={(v) => onSearchChange(v)}
              placeholder='Search Coin'
            />
          </FilterBox>
          <Table
            columns={CryptoTableColumns}
            data={filteredData || []}
            customCellRender={PercentTableCell}
            rowSelector={'id'}
            onRowClick={onRowClick}
          />
        </TableBox>
      )}
    </MainPageStyled>
  );
};
