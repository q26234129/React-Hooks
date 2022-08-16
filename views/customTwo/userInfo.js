import { useState } from "react";

// 用户模块 hook
function useUser() {
  // 用户信息
  const [userInfo, setInfo] = useState({
    name: "张三",
    sex: "男",
    age: "18",
    accounts: "zhangsan123",
    pwd: "123123"
  });

  // 设置用户详情
  const setUserInfo = (obj) => {
    setInfo(obj);
  };

  // 修改帐号
  const changeUserInfo = (newAccounts) => {
    setUserInfo({
      ...userInfo,
      accounts: newAccounts
    });
  };

  // 修改密码
  const changePassword = (newPass) => {
    setUserInfo({
      ...userInfo,
      pwd: newPass
    });
  };

  return {
    userInfo,
    setUserInfo,
    changeUserInfo,
    changePassword
  };
}
export default useUser;
