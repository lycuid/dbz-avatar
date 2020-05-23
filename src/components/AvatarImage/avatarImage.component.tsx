import React, { useContext, useCallback } from 'react';
import './avatarImage.style.css';

import { AppContext } from '../../context';
import { AVATAR_PARTS_QUEUE } from '../../configs';


interface AvatarImageProps { }

const AvatarImage: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement> & AvatarImageProps> = React.forwardRef(({}, ref) => {
  const { avatarPart } = useContext(AppContext) as AvatarAppContext;

  const insertAvatarPart = useCallback(({ id, components }: AvatarPartQueueItem, key: number) => {
    const { index, fill } = avatarPart.get(id);
    return (
      <React.Fragment key={`${id}-${key}`}>
        {components[index]({ fill })}
      </React.Fragment>
    )
  }, [avatarPart]);

  return (<>
    <div id={'avatar-image'}>
      <svg viewBox='0 0 250 250' ref={ref}>
        {AVATAR_PARTS_QUEUE.map(insertAvatarPart)}
      </svg>
    </div>
  </>);
});

export default AvatarImage;
