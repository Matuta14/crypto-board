import ArrowIcon from '../../../assets/icons/arrowIcon';
import { Theme } from '../../../theme';
import { IMobileTableProps } from '../types';
import {
  MobileAssetBlock,
  MobileAssetTableStyled,
  MobileTableRow,
} from './mobileAssetTable.styled';

export const MobileAssetTable = ({
  data,
  columns,
  onRowClick,
}: IMobileTableProps) => {
  return (
    <MobileAssetTableStyled>
      {data.map((asset) => (
        <MobileAssetBlock onClick={() => onRowClick(asset.id)} key={asset.id}>
          {columns.map((c) => {
            return (
              <MobileTableRow>
                <span className='label'>{c.label}</span>

                <span className='value'>{asset?.[c.value]}</span>
              </MobileTableRow>
            );
          })}
          <span className='chart-button'>
            See chart{' '}
            <ArrowIcon fill={Theme.colors.MAIN_BLUE} className='arrow-icon' />
          </span>
        </MobileAssetBlock>
      ))}
    </MobileAssetTableStyled>
  );
};
