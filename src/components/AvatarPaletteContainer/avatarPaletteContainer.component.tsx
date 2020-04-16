import React, { useContext } from 'react';
import './avatarPaletteContainer.style.css';

import Palette from '../__pure__/Palette/palette.component';
import PreviewSelector from '../PreviewSelector/previewSelector.component';
import ColorSwatch from '../__pure__/ColorSwatch/colorSwatch.component';

import { AppContext } from '../../context';
import { AVATAR_PARTS, AVATAR_PART_IDS, BOUNDS } from '../../configs';


interface AvatarPaletteContainerProps { }

const AvatarPaletteContainer: React.FC<AvatarPaletteContainerProps> = () => {
  const { updateAvatar, getAvatarPart } = useContext(AppContext) as AvatarAppContext;

  return (<>
    <div className={'palette-container'}>
      {AVATAR_PART_IDS.map((partID, partIndex) => {
        const { defaultColors, fill } = getAvatarPart(partID);

        return (
          <Palette key={partID + String(partIndex)}
            title={partID}
            selected={fill}
            onSelect={({ target }: React.ChangeEvent<HTMLInputElement>) => {
              updateAvatar(partID, { fill: target.value });
            }}
          >

            <PreviewSelector partID={partID} />
            <ColorSwatch
              selected={fill}
              colors={defaultColors}
              onSelect={(color) => { updateAvatar(partID, { fill: color }); }}
            />

          </Palette>
        );
      })}
    </div>
  </>);
}

export default AvatarPaletteContainer;
