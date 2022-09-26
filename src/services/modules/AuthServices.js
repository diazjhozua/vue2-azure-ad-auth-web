import Axios from "axios";
import { msalInstance } from "vue-msal-browser";

export const login = async () => {
  try {
    let newTokenResponse;

    // The user has already logged in. We try to get his token silently
    if (msalInstance.getAllAccounts().length > 0) {
      newTokenResponse = await msalInstance.acquireTokenSilent({
        account: msalInstance.getAllAccounts()[0],
        scopes: msalInstance.extendedConfiguration.auth.scopes,
      });
    }
    // The user has not logged in. We check if he comes back from a redirect with a token
    else newTokenResponse = await msalInstance.handleRedirectPromise();

    // No token found, we redirect the user
    if (!newTokenResponse) {
      await msalInstance.loginRedirect(msalInstance.loginRequest);
      return false;
    }
    // There is an existing token, we authentify the user
    else if (newTokenResponse) {
      if (newTokenResponse?.idToken)
        Axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newTokenResponse.idToken}`;

      return true;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
