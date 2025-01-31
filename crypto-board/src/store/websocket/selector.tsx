// import { actionType } from '../helpers/types';

export const selectWSData = (state: { websocket: { data: any } }) =>
  state.websocket.data;
export const selectWSError = (state: { websocket: { error: any } }) =>
  state.websocket.error;
// export const selectWSAction = (state: { websocket: { action: actionType } }) =>
//   state.websocket?.action;
