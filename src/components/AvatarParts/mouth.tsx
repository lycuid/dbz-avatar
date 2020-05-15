import React from 'react';


interface AvatarMouthProps { }

const Mouth1: React.FC<AvatarMouthProps> = () => {
  return (<>
    <path stroke='#000' fill='none' d='M120 187 Q130 180, 135 185' />
  </>);
}

const Mouth2: React.FC<AvatarMouthProps> = () => {
  return (<>
    <path stroke='#000' fill='none' d='M120 187 Q130 187, 135 183' />
  </>);
}


export default [Mouth1, Mouth2];
