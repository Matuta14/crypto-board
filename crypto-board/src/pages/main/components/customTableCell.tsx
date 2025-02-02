import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AssetDirectionType } from '../types';
import { PercentTabeCell } from './customTableCell.styled';
import ArrowIcon from '../../../assets/icons/arrowIcon';
import { Theme } from '../../../theme';
import { TableCell } from '../../../shared-components/table/table.styled';
import { IAsset } from '../../../api/assets/types';
import { selectPrices } from '../../../store/assets/selector';
import { Tooltip } from '../../../shared-components/tooltip/tooltip';
import { useWebSocketContext } from '../../../hooks/useWebsocketContext';
import useViewport from '../../../hooks/useViewport';

const CustomCellRenderComp = ({
  asset,
  label,
}: {
  asset: IAsset;
  label: string;
}) => {
  const { lastMessage } = useWebSocketContext();
  const prices = useSelector(selectPrices);
  const { isMobile } = useViewport();

  const getPriceValue = useMemo(() => {
    if (lastMessage) {
      const wsPrice = JSON.parse(lastMessage?.data)?.[asset.id as any];
      if (wsPrice) {
        return wsPrice;
      }
    }
    return prices?.[asset.id as any];
  }, [lastMessage, prices, asset.id]);

  if (label === 'changePercent24Hr') {
    return (
      <PercentTabeCell
        direction={
          Number(asset.changePercent24Hr) > 0
            ? AssetDirectionType.UP
            : AssetDirectionType.DOWN
        }
      >
        {!isMobile && (
          <ArrowIcon
            className='arrow'
            fill={
              Number(asset.changePercent24Hr) > 0
                ? Theme.colors.GREEN
                : Theme.colors.RED
            }
          />
        )}
        {asset.changePercent24Hr}
        {isMobile && (
          <ArrowIcon
            className='arrow'
            fill={
              Number(asset.changePercent24Hr) > 0
                ? Theme.colors.GREEN
                : Theme.colors.RED
            }
          />
        )}
      </PercentTabeCell>
    );
  }
  if (label === 'priceUsd') {
    return (
      <TableCell $align='right'>
        {lastMessage && (
          <Tooltip align={'right'} tooltipText={getPriceValue}>
            <span className='hide-overflow'>{getPriceValue}</span>
          </Tooltip>
        )}
      </TableCell>
    );
  }

  return null;
};

export const CustomCellRender = React.memo(CustomCellRenderComp);
