import { AssetDirectionType } from '../types';
import { PercentTabeCell } from './customTableCell.styled';
import ArrowIcon from '../../../assets/icons/arrowIcon';
import { Theme } from '../../../theme';
import { TableCell } from '../../../shared-components/table/table.styled';
import { useSelector } from 'react-redux';
import { IAsset } from '../../../api/assets/types';
import { selectPrices } from '../../../store/assets/selector';
import { Tooltip } from '../../../shared-components/tooltip/tooltip';
import { useWebSocketContext } from '../../../hooks/useWebsocketContext';

export const CustomCellRender = (asset: IAsset, label: string, key: number) => {
  const { lastMessage } = useWebSocketContext();
  const prices = useSelector(selectPrices);

  // If new price is sent by websocket, show the websocket data (updated in live),
  // If not, show the fetched data that is updated in every minute
  const getPriceValue = () => {
    const wsPrice = JSON.parse(lastMessage.data)?.[asset.id as any];
    if (lastMessage && wsPrice) {
      return wsPrice;
    }
    return prices?.[asset.id as any];
  };

  if (label === 'changePercent24Hr') {
    return (
      <PercentTabeCell
        direction={
          Number(asset.changePercent24Hr) > 0
            ? AssetDirectionType.UP
            : AssetDirectionType.DOWN
        }
        key={key}
      >
        <ArrowIcon
          className='arrow'
          fill={
            Number(asset.changePercent24Hr) > 0
              ? Theme.colors.GREEN
              : Theme.colors.RED
          }
        />{' '}
        {asset.changePercent24Hr}
      </PercentTabeCell>
    );
  }
  if (label === 'priceUsd') {
    return (
      <TableCell $align='right' key={key}>
        {lastMessage && (
          <Tooltip align={'right'} tooltipText={getPriceValue()}>
            <span className='hide-overflow'>{getPriceValue()}</span>
          </Tooltip>
        )}
      </TableCell>
    );
  }
};
