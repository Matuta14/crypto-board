import { useQuery } from 'react-query';
import {
  IAssetHistoryRequest,
  IAssetHistoryResponse,
  IAssetsRequest,
  IAssetsResponse,
} from './types';
import axios from 'axios';
import { createEndpoint, SERVICES } from '../endpoints';
import { useDispatch } from 'react-redux';
import { setAssetsData, setPrices } from '../../store/assets/slice';
import { convertDataToPriceMap } from '../../helpers/converters';

const getAssets = async (props: IAssetsRequest) => {
  const { data } = await axios.get<IAssetsResponse>(
    `${createEndpoint(SERVICES.assets)}${props ? '?' : ''}${
      props.limit ? `limit=${props.limit}` : ''
    }${props.ids ? `&ids=${props.ids}` : ''}`
  );
  return data;
};

const getAssetHistory = async (props: IAssetHistoryRequest) => {
  const { data } = await axios.get<IAssetHistoryResponse>(
    `${createEndpoint(SERVICES.assets)}/${props.id}/history?interval=${
      props.interval
    }${props.start ? `&start=${props.start}&end=${props.end}` : ''}`
  );
  return data;
};

export const useAssets = (props: IAssetsRequest) => {
  const dispatch = useDispatch();

  return useQuery<IAssetsResponse>({
    queryKey: ['assets', props],
    queryFn: () => getAssets(props),
    onSuccess: (data) => {
      dispatch(setAssetsData(data.data));
      dispatch(setPrices(convertDataToPriceMap(data.data)));
    },
    refetchInterval: 60000,
  });
};

export const useAssetHistory = (props: IAssetHistoryRequest) => {
  return useQuery<IAssetHistoryResponse>({
    queryKey: ['asset', props],
    queryFn: () => getAssetHistory(props),
    refetchInterval: 60000,
  });
};
