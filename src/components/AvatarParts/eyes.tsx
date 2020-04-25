import React from 'react';


interface AvatarEyesProps { fill: string }

const Eyes1: React.FC<AvatarEyesProps> = ({ fill }) => {
  return (<>
    <g fill='#ffffff'>
      <polygon points='67.5,130 70,140 95,140' />
      <polygon fill='#ffffff' points='132.5,130 130,140 105,140' />
    </g>
    <g fill={fill} stroke={fill}>
      <path d='M62 128 L81.25 135 A2.25 3 0 0 0 86.75 137 L95 140 L95 139.5 L62 125 Z' />
      <path d='M138 128 L118.75 135 A2.25 3 0 0 1 113.25 137 L105 140 L105 139.5 L138 125 Z' />
    </g>
    <g fill='none' stroke='#000000' strokeWidth={.5}>
      <path d='M68.75 135 L69.75 139 Q70 140, 72.5 140 L85 140' />
      <path d='M131.25 135 L130.25 139 Q130 140, 127.5 140 L115 140' />
    </g>
  </>);
}


const Eyes2: React.FC<AvatarEyesProps> = ({ fill }) => {
  return (<>
    <path fill='#ffffff' d='M72.5 142 Q80 137, 90 142 L90 132 A1 1.3 -20 0 0 70 132 Z' />
    <path fill='none' stroke='#000000' d='M72.5 142 L70 132 A1 1.3 -20 0 1 90 132' />
    <ellipse fill={fill} cx='87.5' cy='136' rx='2.5' ry='3.5' />
    <path fill={fill} stroke={fill} d='M65 125 Q65 110, 80 115 L81 114 Q63 107, 62.5 122 Q63 124, 65 125' />

    <path fill='#ffffff' d='M127.5 142 Q120 137, 110 142 L110 132 A1 1.3 20 0 1 130 132 Z' />
    <path fill='none' stroke='#000000' d='M127.5 142 L130 132 A1 1.3 20 0 0 110 132' />
    <ellipse fill={fill} cx='112.5' cy='136' rx='2.5' ry='3.5' />
    <path fill={fill} stroke={fill} d='M135 125 Q135 110, 120 115 L119 114 Q137 107, 137.5 122 Q137 124, 135 125' />
  </>);
}



export default [Eyes1, Eyes2];
