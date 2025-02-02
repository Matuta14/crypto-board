import ArrowIcon from '../../../assets/icons/arrowIcon';
import { EmptyTable } from '../../../shared-components/table/emptyTable';
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
  customCellRender,
}: IMobileTableProps) => {
  if (data?.length === 0) {
    return <EmptyTable />;
  }
  return (
    <MobileAssetTableStyled>
      {data.map((asset) => (
        <MobileAssetBlock onClick={() => onRowClick(asset.id)} key={asset.id}>
          {columns.map((c, index) => {
            if (c.customRender && customCellRender) {
              const DynamicComponent = customCellRender;
              return (
                <MobileTableRow key={index}>
                  <span className='label'>{c.label}</span>
                  <span className='value'>
                    <DynamicComponent
                      key={index}
                      asset={asset}
                      label={String(c.value)}
                    />
                  </span>
                </MobileTableRow>
              );
            }
            return (
              <MobileTableRow key={index}>
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
