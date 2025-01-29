import { phoneNumberType } from '../../pages/kyc/types';

export const selectKycMethod = (state: { kyc: { method: string } }) => {
  return state.kyc.method;
};

export const selectPhoneNumbers = (state: {
  kyc: { phoneNumbers: phoneNumberType[] };
}) => {
  return state.kyc.phoneNumbers;
};
