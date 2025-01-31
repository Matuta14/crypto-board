import { useAssets } from '../../api/assets/assets.requets';
import { Table } from '../../shared-components/table/table';
import { CustomCellRender } from './components/customTableCell';
import { CryptoTableColumns } from './constants';
import { FilterBox, MainPageStyled, TableBox } from './mainPage.styled';
import { useNavigate } from 'react-router-dom';
import Loader from '../../shared-components/loader/loader';
import { Input } from '../../shared-components/input/input';
import { useState } from 'react';
import useViewport from '../../hooks/useViewport';
import { MobileAssetTable } from './components/mobileAssetTable';

export const MainPage = () => {
  const { data, isLoading } = useAssets({ limit: 10 });
  const [searchValue, setSearchValue] = useState('');
  const { isMobile } = useViewport();
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

          {isMobile ? (
            <MobileAssetTable
              columns={CryptoTableColumns}
              data={filteredData}
              onRowClick={onRowClick}
            />
          ) : (
            <Table
              columns={CryptoTableColumns}
              data={filteredData || []}
              customCellRender={CustomCellRender}
              rowSelector={'id'}
              onRowClick={onRowClick}
            />
          )}
        </TableBox>
      )}
    </MainPageStyled>
  );
};
