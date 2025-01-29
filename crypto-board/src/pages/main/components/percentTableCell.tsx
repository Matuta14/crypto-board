import { AssetDirectionType } from '../types';
import { PercentTabeCell } from './percentTable.styled';
import ArrowIcon from '../../../assets/icons/arrowIcon';
import { Theme } from '../../../theme';

export const PercentTableCell = (percent: number) => {
  return (
    <PercentTabeCell
      direction={percent > 0 ? AssetDirectionType.UP : AssetDirectionType.DOWN}
    >
      <ArrowIcon
        className='arrow'
        fill={percent > 0 ? Theme.colors.GREEN : Theme.colors.RED}
      />{' '}
      {percent}
    </PercentTabeCell>
  );
};
