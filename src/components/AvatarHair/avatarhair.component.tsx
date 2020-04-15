import React from 'react';


interface AvatarHairProps { fill: string }

export const Hair1: React.FC<AvatarHairProps> = ({ fill }) => {
  return (<>
    <path stroke='#000' fill={fill}
      d='M55 140
        A1 1.75 10 0 1 100 110
        A1 1.75 -10 0 1 145 140
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
