import React, { useContext, useMemo } from 'react';
import './previewSelector.style.css';

import { AVATAR_PARTS, BOUNDS } from '../../configs';
import { AppContext } from '../../context';

import Preview from '../__pure__/Preview/preview.component';


interface PreviewSelectorProps { partID: AvatarPartID }

const PreviewSelector: React.FC<PreviewSelectorProps> = ({ partID }) => {
  const { avatarPart } = useContext(AppContext) as AvatarAppContext;

  const { id, fill } = useMemo(() => avatarPart.get(partID), [avatarPart]);
  const partsToPreview = useMemo(() => AVATAR_PARTS[partID], [partID]);

  return (<>
    <div className='preview-selector'>
      {partsToPreview.map(({ component }, previewIndex) => {
        const isSelected = id === previewIndex;
        return (
          <Preview
            key={partID + String(previewIndex)}
            className='retro-btn'
            selected={isSelected}
            onClick={() => {
              if (!isSelected) {
                avatarPart.update(partID, { id: previewIndex });
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
