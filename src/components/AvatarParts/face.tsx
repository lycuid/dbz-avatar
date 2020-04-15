import React from 'react';


interface AvatarFaceProps { fill: string }

const Face1: React.FC<AvatarFaceProps> = ({ fill }) => {
  return (<>
    <g fill={fill} stroke={fill} strokeWidth={1}>
      <path d='M50 110 A1 1 0 0 1 150 110 L141 155 Q140 160, 136 162 L104 178 Q100 180, 96 178 L64 162 Q60 160, 59 155 Z' />
    </g>
  </>);
}

export default [Face1];
