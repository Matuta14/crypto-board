import { createSlice } from '@reduxjs/toolkit';
import { kycNumberMethods, phoneNumberType } from '../../pages/kyc/types';
const kycSlice = createSlice({
  name: 'kyc',
  initialState: {
    method: kycNumberMethods,
    phoneNumbers: [] as phoneNumberType[],
  },
  reducers: {
    setKycMethod: (state, action) => {
      state.method = action.payload;
    },
    setPhoneNumbers: (state, action) => {
      state.method = action.payload;
    },
  },
});
export const { setKycMethod, setPhoneNumbers } = kycSlice.actions;

export default kycSlice.reducer;
