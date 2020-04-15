import React from 'react';
import './avatarImage.style.css';


interface AvatarImageProps { }

const AvatarImage: React.FC<AvatarImageProps> = ({ children }) => {
  return (<>
    <div id={'avatar-image'}>
      <svg viewBox='0 0 200 200'>{children}</svg>
    </div>
  </>);
}

export default AvatarImage;
