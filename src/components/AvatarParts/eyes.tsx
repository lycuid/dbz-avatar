import React from 'react';


interface AvatarEyesProps { fill: string }

const Eyes1: React.FC<AvatarEyesProps> = ({ fill }) => {
  return (<>
    <g fill='#ffffff'>
      <polygon points='92.5,155 95,165 120,165' />
      <polygon fill='#ffffff' points='157.5,155 155,165 130,165' />
    </g>
    <g fill={fill} stroke={fill}>
      <path d='M87 153 L106.25 160 A2.25 3 0 0 0 111.75 162 L120 165 L120 164.5 L87 150 Z' />
      <path d='M163 153 L143.75 160 A2.25 3 0 0 1 138.25 162 L130 165 L130 164.5 L163 150 Z' />
    </g>
    <g fill='none' stroke='#000000' strokeWidth={.5}>
      <path d='M93.75 160 L94.75 164 Q95 165, 97.5 165 L110 165' />
      <path d='M156.25 160 L155.25 164 Q155 165, 152.5 165 L140 165' />
    </g>
  </>);
}


const Eyes2: React.FC<AvatarEyesProps> = ({ fill }) => {
  return (<>
    <path fill='#ffffff' d='M97.5 167 Q105 162, 115 167 L115 157 A1 1.3 -20 0 0 95 157 Z' />
    <path fill='none' stroke='#000000' d='M97.5 167 L95 157 A1 1.3 -20 0 1 115 157' />
    <ellipse fill={fill} cx='112.5' cy='161' rx='2.5' ry='3.5' />
    <path fill={fill} stroke={fill} d='M90 150 Q90 135, 105 140 L106 139 Q88 132, 87.5 147 Q88 149, 90 150' />

    <path fill='#ffffff' d='M152.5 167 Q145 162, 135 167 L135 157 A1 1.3 20 0 1 155 157 Z' />
    <path fill='none' stroke='#000000' d='M152.5 167 L155 157 A1 1.3 20 0 0 135 157' />
    <ellipse fill={fill} cx='137.5' cy='161' rx='2.5' ry='3.5' />
    <path fill={fill} stroke={fill} d='M160 150 Q160 135, 145 140 L144 139 Q162 132, 162.5 147 Q162 149, 160 150' />
  </>);
}



export default [Eyes1, Eyes2];
