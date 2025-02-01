// TODO: delete
export const selectWSData = (state: { websocket: { data: any } }) =>
  state.websocket.data;
export const selectWSError = (state: { websocket: { error: any } }) =>
  state.websocket.error;
