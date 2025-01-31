import styled from 'styled-components';
import { responsive } from '../../layout/sizeConstants';

export const ChartPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  .content-box {
    display: flex;
    flex-direction: column;
    height: 100%;
    .select {
      margin-bottom: 30px;
    }
  }

  @media ${responsive.mobile} {
    padding: 30px;
  }
`;
export const ChartBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  canvas {
    width: 100%;
    height: 100%;
  }
`;
