import React, { useContext, useMemo } from 'react';
import StyledPreviewSelector from './previewSelector.style';

import { AVATAR_PARTS_QUEUE } from '../../configs';
import { AppContext } from '../../context';
import { transpose } from '../../utils';

import Preview from '../__pure__/Preview/preview.component';

interface PreviewSelectorProps {
  partID: AvatarPartID;
}

const PreviewSelector: React.FC<PreviewSelectorProps> = ({ partID }) => {
  const { avatar } = useContext(AppContext) as AvatarAppContext;
  const { index, fill, previewBounds } = useMemo(() => avatar.get(partID), [avatar, partID]);

  const partsToPreview = useMemo(
    () =>
      transpose(
        ...AVATAR_PARTS_QUEUE.filter(({ id }) => id === partID).map(
          ({ components }) => components
        )
      ),
    [partID]
  );

  return (
    <>
      <StyledPreviewSelector>
        {partsToPreview.map((components, previewIndex) => {
          const isSelected = index === previewIndex;
          return (
            <Preview
              key={partID + String(previewIndex)}
              selected={isSelected}
              onClick={() => {
                if (!isSelected)
                  avatar.update(partID, { index: previewIndex });
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
          );
        })}
      </StyledPreviewSelector>
    </>
  );
};

export default PreviewSelector;
