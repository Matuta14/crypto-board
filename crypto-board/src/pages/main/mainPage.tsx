import { useDispatch } from 'react-redux';
import { useAssets } from '../../requests/assets/assets.requets';
import { Table } from '../../shared-components/table/table';
import { CoinPriceChart } from '../chart/components/coinChart';
import { PercentTableCell } from './components/percentTableCell';
import { CryptoTableColumns } from './constants';
import { MainPageStyled, TableBox } from './mainPage.styled';
import { setCoin } from '../../store/assets/slice';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const { data } = useAssets({ limit: 10 });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRowClick = (coin: string) => {
    console.log('coin: ', coin);
    dispatch(setCoin(coin));
    navigate('/chart');
    localStorage.setItem('selectedCoin', coin);
  };

  return (
    <MainPageStyled>
      <TableBox>
        <Table
          columns={CryptoTableColumns}
          data={data?.data || []}
          customCellRender={PercentTableCell}
          rowSelector={'id'}
          onRowClick={onRowClick}
        />
      </TableBox>
    </MainPageStyled>
  );
};
