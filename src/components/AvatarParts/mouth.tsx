import React from 'react';


interface AvatarMouthProps { }

const Mouth1: React.FC<AvatarMouthProps> = () => {
  return (<>
    <path stroke='#000' fill='none' d='M95 162 Q105 155, 110 160' />
  </>);
}

const Mouth2: React.FC<AvatarMouthProps> = () => {
  return (<>
    <path stroke='#000' fill='none' d='M95 162 Q105 162, 110 158' />
  </>);
}


export default [Mouth1, Mouth2];
