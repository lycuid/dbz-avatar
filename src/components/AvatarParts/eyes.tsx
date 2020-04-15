import React from 'react';


interface AvatarEyesProps { fill: string }

const Eyes1: React.FC<AvatarEyesProps> = ({ fill }) => {
  return (<>
    <g fill='#FFF'>
      <polygon points='67.5,130 70,140 95,140' />
      <polygon fill='#FFF' points='132.5,130 130,140 105,140' />
    </g>
    <g fill={fill} stroke='#000' strokeWidth={1}>
      <path d='M62 128 L81.25 135 A2.25 3 0 0 0 86.75 137 L95 140 L95 139.5 L62 125 Z' />
      <path d='M138 128 L118.75 135 A2.25 3 0 0 1 113.25 137 L105 140 L105 139.5 L138 125 Z' />
    </g>
    <g fill='none' stroke='#000' strokeWidth={1}>
      <path d='M68.75 135 L69.75 139 Q70 140, 72.5 140 L85 140' />
      <path d='M131.25 135 L130.25 139 Q130 140, 127.5 140 L115 140' />
    </g>
  </>);
}

export default [Eyes1];
