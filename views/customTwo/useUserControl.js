import useUser from "./userInfo";
// 用户模块交互逻辑hooks
function useUserControl() {
  // 组合用户hook
  const { userInfo, setUserInfo, changeUserInfo, changePassword } = useUser();

  // 初始化数据
  const initData = (obj) => {
    setUserInfo(obj);
  };
  // 修改密码表单提交
  const onChangePassword = (newPass) => {
    if (newPass === userInfo.pwd) {
      console.log("与原密码一样请重新输入");
    } else {
      changePassword(newPass);
    }
  };

  const onChangeUserInfo = (newAccounts) => {
    changeUserInfo(newAccounts);
  };

  return {
    // 用户数据
    userInfo,
    // 初始化数据
    initData,
    // 修改密码
    onChangePassword,
    // 修改用户信息
    onChangeUserInfo
  };
}

export default useUserControl;
