import moment from 'moment';

import { StorageService } from './storage.service';

export const AuthenticationService = {
  isLoggedIn: () => {
    try {
      const authTokens = StorageService.getAuthKey();
      if (!authTokens) return false;
      const { expiry } = authTokens;
      if (moment().isAfter(expiry)) {
        AuthenticationService.logout();
        return false;
      }
      return true;
    } catch (e) {
      return undefined;
    }
  },
  logout: () => StorageService.setAuthKey(undefined),
  getAuthToken: () => {
    if (AuthenticationService.isLoggedIn()) {
      const { value } = StorageService.getAuthKey();
      return value.token;
    }
    return undefined;
  },
  getCurrentUser: () => {
    if (AuthenticationService.isLoggedIn()) {
      const { value } = StorageService.getAuthKey();
      try {
        return value;
      } catch (e) {
        return undefined;
      }
    }
    return undefined;
  },
};
