import React from 'react';


interface AvatarHairProps { fill: string }

const Hair1: React.FC<AvatarHairProps> = ({ fill }) => {
  return (<>
    <path stroke={fill} fill={fill}
      d='M81 165
        A1 1.75 10 0 1 125 135
        A1 1.75 -10 0 1 169 165
        L195 145 L200 135 L180 135
        L195 105 L195 85 L175 105
        L180 75 L175 55 L160 80
        L150 50 L125 25 L125 40 L115 55 L115 35
        L100 50 L90 65 L85 40 L65 75
        L60 95 L65 115 L45 105
        L65 140 L45 135 L60 155 Z'
    />
  </>);
}

const Hair2: React.FC<AvatarHairProps> = ({ fill }) => {
  return (<>
    <path stroke={fill} fill={fill}
      d='M81 165 Q65 155, 50 155
        Q57.5 147.5, 70 150 Q55 140, 35 140 Q50 130, 65 130
        Q50 110, 35 100 Q55 95, 70 110
        Q60 85, 35 55 Q55 45, 70 50
        Q90 65, 95 75
        Q100 55, 90 30 Q110 30, 130 40
        Q142.5 55, 145 85 A36 60 0 0 1 180 130
        Q200 125, 215 130 Q195 135, 185 140
        Q200 140, 210 145 Q190 145, 180 155
        Q190 155, 195 157.5 Q180 157.5, 169 165
        Q175 145, 170 135 Q170 140, 165 145
        Q165 130, 155 125 Q155 145, 140 150
        Q145 135, 135 125 Q110 135, 105 155
        Q95 135, 105 120 Q90 130, 90 140
        Q80 135, 85 125 Q72.5 135, 81 165'
    />
  </>);
}


export default [Hair1, Hair2];
