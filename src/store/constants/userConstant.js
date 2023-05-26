const PREFIX = "userStore/"; // prefix
const ACTION_USER_INFO = "actionGetUserInfo"; // user 조회 API 호출
const MU_USER_INFO = "mutationGetUserInfo";
const MU_INIT_USER_INFO = "initUserInfo";

const constant = {
  ACTION_USER_INFO: ACTION_USER_INFO,
  MU_INIT_USER_INFO: MU_INIT_USER_INFO,
  MU_USER_INFO: MU_USER_INFO,
  CALL_MU_INIT_USER_INFO: PREFIX + MU_INIT_USER_INFO,
  CALL_ACTION_USER_INFO: PREFIX + ACTION_USER_INFO,
  CALL_MU_USER_INFO: PREFIX + MU_USER_INFO,
};

export default constant;
