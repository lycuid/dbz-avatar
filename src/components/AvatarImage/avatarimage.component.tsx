import React from 'react';
import './avatarimage.style.css';

import AvatarFace from '../AvatarFace/avatarface.component';
import AvatarEyes from '../AvatarEyes/avatareyes.component';
import AvatarNose from '../AvatarNose/avatarnose.component';
import AvatarMouth from '../AvatarMouth/avatarmouth.component';
import AvatarHair from '../AvatarHair/avatarhair.component';


interface AvatarImageProps {
  colors: any
}

const AvatarImage: React.FC<AvatarImageProps> = ({ colors }) => {
  return (<>
    <svg viewBox='0 0 200 200'>
      <AvatarFace fill={colors.face} />
      <AvatarEyes fill={colors.eyes} />
      <AvatarNose fill={colors.nose} />
      <AvatarHair fill={colors.hair} />

      <AvatarMouth />
    </svg>
  </>);
}

export default AvatarImage;
