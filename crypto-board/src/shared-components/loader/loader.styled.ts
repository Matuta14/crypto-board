import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

export const LoaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .loader {
    width: 40px;
    height: 40px;
    border: 4px solid #3d9496;
    border-top: 4px solid transparent;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }
`;
