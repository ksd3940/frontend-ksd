import React, { useState } from 'react';
import ChildProps02 from './ChildProps02';

//! 자식 컴포넌트의 이벤트를 부모 컴포넌트에게 전달
// : 자식 컴포넌트 에서 발행한 이벤트를
// : 부모 컴포넌트트의 함수를 통해 처리

type UserType = {
  name: string;
  height: number;
};

const initialValue: UserType = {
  name: 'kong sae june',
  height: 180,
};

//^ 부모 컴포넌트
export default function StateProps02() {
  const [userInfo, setUserInfo] = useState<UserType>(initialValue);
  const handleUpdate = (newInfo: UserType) => {
    setUserInfo(newInfo);
  };
  return (
    <div>
      <ChildProps02 userInfo={userInfo} onUpdate={handleUpdate} />
    </div>
  );
}
