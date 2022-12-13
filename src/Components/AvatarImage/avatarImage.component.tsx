import React, { useContext, useCallback } from 'react';
import StyledAvatarImage from './avatarImage.style';

import { AppContext } from '../../Context';
import { AVATAR_PARTS_QUEUE } from '../../Config';


interface AvatarImageProps { }

const AvatarImage: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement> & AvatarImageProps> = React.forwardRef(({}, ref) => {
  const { avatar } = useContext(AppContext) as AvatarAppContext;

  const insertAvatarPart = useCallback(({ id, components }: AvatarPartQueueItem, key: number) => {
    const { index, fill } = avatar.get(id);
    return (
      <React.Fragment key={`${id}-${key}`}>
        {components[index]({ fill })}
      </React.Fragment>
    )
  }, [avatar]);

  return (<>
    <StyledAvatarImage>
      <svg viewBox='0 0 250 250' ref={ref}>
        {AVATAR_PARTS_QUEUE.map(insertAvatarPart)}
      </svg>
    </StyledAvatarImage>
  </>);
});

export default AvatarImage;
