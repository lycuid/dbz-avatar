import React, { useContext, useMemo } from 'react';
import './previewSelector.style.css';

import { AVATAR_PARTS, BOUNDS } from '../../configs';
import { AppContext } from '../../context';

import Preview from '../__pure__/Preview/preview.component';


interface PreviewSelectorProps { partID: AvatarPartID }

const PreviewSelector: React.FC<PreviewSelectorProps> = ({ partID }) => {
  const { updateAvatar, getAvatarPart } = useContext(AppContext) as AvatarAppContext;

  const { cIndex, fill } = useMemo(() => getAvatarPart(partID), [getAvatarPart]);
  const partsToPreview = useMemo(() => AVATAR_PARTS[partID], [partID]);

  return (<>
    <div className='preview-selector'>
      {partsToPreview.map(({ component }, previewIndex) => {
        const isSelected = cIndex === previewIndex;
        return (
          <Preview
            key={partID + String(previewIndex)}
            className='retro'
            selected={isSelected}
            onClick={() => {
              if (!isSelected) {
                updateAvatar(partID, { cIndex: previewIndex });
              }
            }}
          >
            <svg viewBox={BOUNDS[partID].map(String).join(', ')}>
              {component({ fill })}
            </svg>
          </Preview>
        )
      })}
    </div>
  </>);
}

export default PreviewSelector;
