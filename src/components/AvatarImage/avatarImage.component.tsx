import React, { useContext, useCallback } from 'react';
import './avatarImage.style.css';
import { AppContext } from '../../context';
import { AVATAR_PART_IDS } from '../../configs';


interface AvatarImageProps { }

const AvatarImage: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement> & AvatarImageProps> = React.forwardRef(({}, ref) => {
  const { getAvatarPart } = useContext(AppContext) as AvatarAppContext;

  const insertAvatarPart = useCallback((partID: AvatarPartID, index) => {
    const { component, fill } = getAvatarPart(partID);
    return (<React.Fragment key={partID + String(index)}>{component({ fill })}</React.Fragment>);
  }, [getAvatarPart]);

  return (<>
    <div id={'avatar-image'}>
      <svg viewBox='0 0 250 250' ref={ref}>
        {AVATAR_PART_IDS.map(insertAvatarPart)}
      </svg>
    </div>
  </>);
});

export default AvatarImage;
