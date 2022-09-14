import useUserControl from "./useUserControl.js";
import React, { useState, useEffect } from "react";

function UserModule() {
  const {
    userInfo,
    // initData,
    onChangePassword,
    onChangeUserInfo
  } = useUserControl();
  const [newPwd, setNewPwd] = useState();

  useEffect(() => {
    // initData({
    //   name: "abc"
    // });
  }, []);

  // 修改帐号为： newAccounts
  const handleChangeInfo = () => {
    onChangeUserInfo("newAccounts");
  };

  // 获取文本框中的pwd
  const changePwd = (e) => {
    let data = e.target.value;
    setNewPwd(data);
  };

  // 修改密码按钮事件
  const handleChangePwd = () => {
    onChangePassword(newPwd);
  };
  return (
    <>
      <p>用户名：{userInfo?.name}</p>
      <p>性 别：{userInfo?.sex}</p>
      <p>年 龄：{userInfo?.age}</p>
      <p>帐 号：{userInfo?.accounts}</p>
      <p>密 码：{userInfo?.pwd}</p>
      <input onChange={changePwd} />
      <button
        onClick={() => {
          handleChangePwd();
        }}
      >
        修改密码
      </button>
      <br />
      <button
        onClick={() => {
          handleChangeInfo();
        }}
      >
        修改用户信息
      </button>
    </>
  );
}

export default UserModule;
