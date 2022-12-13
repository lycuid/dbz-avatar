import React from 'react';


interface AvatarBackgroundProps { fill: string }

const Background1: React.FC<AvatarBackgroundProps> = ({ fill }) => {
  return <circle fill={fill} r={250 / 2} cx={250 / 2} cy={250 / 2} />;
}

const Background2: React.FC<AvatarBackgroundProps> = ({ fill }) => {
  return <rect fill={fill} width={250} height={250} />;
}

export default [Background1, Background2];
