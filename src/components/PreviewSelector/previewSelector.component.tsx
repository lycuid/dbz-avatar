import React, { useContext, useMemo } from 'react';
import './previewSelector.style.css';

import { AVATAR_PARTS_QUEUE } from '../../configs';
import { AppContext } from '../../context';
import { transpose } from '../../utils';

import Preview from '../__pure__/Preview/preview.component';


interface PreviewSelectorProps { partID: AvatarPartID }

const PreviewSelector: React.FC<PreviewSelectorProps> = ({ partID }) => {
  const { avatarPart } = useContext(AppContext) as AvatarAppContext;

  const { index, fill, previewBounds } = useMemo(() => avatarPart.get(partID), [avatarPart]);
  const partsToPreview = useMemo(() => (transpose(
    ...AVATAR_PARTS_QUEUE
      .filter(({ id }) => id === partID)
      .map(({ components }) => components)
  )), [partID]);

  return (<>
    <div className='preview-selector'>
      {partsToPreview.map((components, previewIndex) => {
        const isSelected = index === previewIndex;
        return (
          <Preview
            key={partID + String(previewIndex)}
            selected={isSelected}
            onClick={() => {
              if (!isSelected) 
                avatarPart.update(partID, { index: previewIndex });
            }}
          >
            <svg viewBox={previewBounds.map(String).join(', ')}>
              {components.map((component, i) => (
                <React.Fragment key={`${partID}-${i}`}>
                  {component({ fill })}
                </React.Fragment>
              ))}
            </svg>
          </Preview>
        )
      })}
    </div>
  </>);
}

export default PreviewSelector;
