import React from 'react';


interface AvatarHairProps { fill: string }

const HairSeperator1: React.FC<AvatarHairProps> = ({ fill }) => {
  return (<>
    <circle cx='125' cy='140' r='49' fill='white' />
  </>);
}

const HairSeperator2: React.FC<AvatarHairProps> = ({ fill }) => {
  return (<>
    <circle cx='125' cy='145' r='48' fill='white' />
  </>);
}

export default [HairSeperator1, HairSeperator2];
