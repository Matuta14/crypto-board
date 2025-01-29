import { useQuery } from 'react-query';
import {
  IAssetHistoryRequest,
  IAssetHistoryResponse,
  IAssetsRequest,
  IAssetsResponse,
} from './types';
import axios from 'axios';
import { endpoints } from '../../api/endpoints';
import { useDispatch } from 'react-redux';
import { setAssetsData } from '../../store/assets/slice';
const AllowOriginHeader = {
  'Access-Control-Allow-Origin': '*',
};

// TODO: change the getFunction to better one

// TODO: add other props to request
const getAssets = async (props: IAssetsRequest) => {
  const { data } = await axios.get<IAssetsResponse>(
    `${endpoints.assets.assets}${props ? '?' : ''}${
      props.limit ? `limit=${props.limit}` : ''
    }`,
    { headers: AllowOriginHeader }
  );
  return data;
};

// TODO: add other props to request
const getAssetHistory = async (props: IAssetHistoryRequest) => {
  const { data } = await axios.get<IAssetHistoryResponse>(
    `${endpoints.assets.assets}/${props.id}/history?interval=${props.interval}${
      props.start ? `&start=${props.start}&end=${props.end}` : ''
    }`,
    { headers: AllowOriginHeader }
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
    },
    refetchInterval: 60000,
  });
};

export const useAssetHistory = (props: IAssetHistoryRequest) => {
  return useQuery<IAssetHistoryResponse>({
    queryKey: ['asset', props],
    queryFn: () => getAssetHistory(props),
  });
};
