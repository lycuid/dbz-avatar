import React from 'react';


interface AvatarHairProps { fill: string }

const FrontHair1: React.FC<AvatarHairProps> = ({ fill }) => {
  return (<>
    <path stroke={fill} fill={fill}
      d='M81 165
        A1 1.75 10 0 1 125 135
        A1 1.75 -10 0 1 169 165
        L180 140 A1 1 0 0 0 70 130 Z'
    />
  </>);
}

const FrontHair2: React.FC<AvatarHairProps> = ({ fill }) => {
  return (<>
    <path stroke={fill} fill={fill}
      d='M169 165 Q175 145, 172.5 135 Q170 140, 165 145
        Q165 130, 155 125 Q155 145, 140 150
        Q145 135, 135 125 Q110 135, 105 155
        Q95 135, 105 120 Q90 130, 90 140
        Q80 135, 85 125 Q79 135, 82.5 147.5
        Q70 135, 70 130 A1 1 0 0 1 175 135 Z'
    />
  </>);
}


export default [FrontHair1, FrontHair2];
