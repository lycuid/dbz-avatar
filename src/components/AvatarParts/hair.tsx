import React from 'react';


interface AvatarHairProps { fill: string }

const Hair1: React.FC<AvatarHairProps> = ({ fill }) => {
  return (<>
    <path stroke={fill} fill={fill}
      d='M56 140
        A1 1.75 10 0 1 100 110
        A1 1.75 -10 0 1 144 140
        L170 120 L 175 110 L155 110
        L170 80 L170 60 L150 80
        L155 50 L150 30 L135 55
        L125 25 L100 0 L100 15 L90 30 L90 10
        L75 25 L65 40 L60 15 L40 50
        L35 70 L40 90 L20 80
        L40 115 L20 110 L35 130 Z'
    />
  </>);
}

const Hair2: React.FC<AvatarHairProps> = ({ fill }) => {
  return (<>
    <path stroke={fill} fill={fill}
      d='M56 140 Q40 130, 25 130
        Q32.5 122.5, 45 125 Q30 115, 10 115 Q25 105, 40 105
        Q25 85, 10 75 Q30 70, 45 85
        Q35 60, 10 30 Q30 20, 45 25
        Q65 40, 70 50
        Q75 30, 65 5 Q85 5, 105 15
        Q117.5 30, 120 60 A36 60 0 0 1 155 105
        Q175 100, 190 105 Q170 110, 160 115
        Q175 115, 185 120 Q165 120, 155 130
        Q165 130, 170 132.5 Q155 132.5, 144 140
        Q150 120, 145 110 Q145 115, 140 120
        Q140 105, 130 100 Q130 120, 115 125
        Q120 110, 110 100 Q85 110, 80 130
        Q70 110, 80 95 Q65 105, 65 115
        Q55 110, 60 100 Q47.5 110, 56 140'
    />
  </>);
}


export default [Hair1, Hair2];
