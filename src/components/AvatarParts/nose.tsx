import React from 'react';


interface AvatarNoseProps { fill: string }

const Nose1: React.FC<AvatarNoseProps> = ({ fill }) => {
  return (<>
    <polygon fill={fill} points='125,173 125,177 127,176 125,173'/>
  </>);
}


export default [Nose1];
