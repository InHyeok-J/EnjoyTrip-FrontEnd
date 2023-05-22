const PREFIX = "signUpStore/";
const MU_EMAIL_PASSWORD = "emailPassword";
const INIT_SIGNUP_STORE = "initSignUpStore";
const MU_PROCESS = "processSetting";
const MU_OAUTH_INFO = "oauthInfo";

const constant = {
  PREFIX: PREFIX,
  MU_EMAIL_PASSWORD: MU_EMAIL_PASSWORD,
  INIT_SIGNUP_STORE: INIT_SIGNUP_STORE,
  MU_PROCESS: MU_PROCESS,
  MU_OAUTH_INFO: MU_OAUTH_INFO,
  CALL_MU_PROCESS: PREFIX + MU_PROCESS,
  CALL_MU_EMAIL_PASSWORD: PREFIX + MU_EMAIL_PASSWORD,
  CALL_INIT_SIGNUP_STORE: PREFIX + INIT_SIGNUP_STORE,
  CALL_MU_OAUTH_INFO: PREFIX + MU_OAUTH_INFO,
};

export default constant;
