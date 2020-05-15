import React from 'react';


interface AvatarFaceProps { fill: string }

const Face1: React.FC<AvatarFaceProps> = ({ fill }) => {
  return (<>
    <g fill={fill} stroke={fill} strokeWidth={1}>
      <path d='M75 135 A1 1 0 0 1 175 135 L166 180 Q165 185, 161 187 L129 203 Q125 205, 121 203 L89 187 Q85 185, 84 180 Z' />
    </g>
  </>);
}

export default [Face1];
