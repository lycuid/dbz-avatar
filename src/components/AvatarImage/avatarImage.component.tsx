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
      <svg viewBox='0 0 266 266' ref={ref}>
        <rect fill='lightgreen' width={266} height={266} />
        <svg width='75%' height='75%' x={33} y={33} viewBox='0 0 200 200'>
          {AVATAR_PART_IDS.map(insertAvatarPart)}
        </svg>
      </svg>
    </div>
  </>);
});

export default AvatarImage;
