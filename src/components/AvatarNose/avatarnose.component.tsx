import React from 'react';


interface AvatarNoseProps { fill: string }

export const Nose1: React.FC<AvatarNoseProps> = ({ fill }) => {
  return (<>
    <polygon fill={fill} points='100 148, 100 152, 102 151 Z'/>
  </>);
}
