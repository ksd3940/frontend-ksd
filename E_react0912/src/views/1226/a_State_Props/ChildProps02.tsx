// ChildProps02.tsx
import React from 'react';

type UserType = {
  name: string;
  height: number;
};

interface ChildComponentProps {
  userInfo: UserType;
  onUpdate: (newInfo: UserType) => void;
}

export default function ChildProps02({ userInfo, onUpdate }: ChildComponentProps) {
  const updateInfo = () => {
    onUpdate({ name: 'kong sae dong', height: 175 });
  };

  return (
    <div>
      <p>name: {userInfo.name}</p>
      <p>height: {userInfo.height}</p>
      <button onClick={updateInfo}>Update Info</button>
    </div>
  );
}
