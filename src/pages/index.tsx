import React, { useCallback, useMemo } from 'react';
import './index.css';

import Head from '../components/head';
import AvatarImage from '../components/AvatarImage/avatarImage.component';
import PaletteContainer from '../components/PaletteContainer/paletteContainer.component';
import Palette from '../components/Palette/palette.component';
import ColorSwatch from '../components/ColorSwatch/colorSwatch.component';
import PreviewSelector from '../components/PreviewSelector/previewSelector.component';
import Preview from '../components/Preview/preview.component';

import { AVATAR_PARTS, BOUNDS } from '../configs';
import { useStateReducer } from '../utils/hooks';


interface IndexPageProps { }

const IndexPage: React.FC<IndexPageProps> = () => {

  const [parts, dispatchParts] = useStateReducer<AvatarPartState>(
    (Object.keys(AVATAR_PARTS) as AvatarPartID[])
      .reduce((acc, key) => ({
        ...acc,
        [key]: {
          cIndex: AVATAR_PARTS[key].length > 0 ? 0 : null,
          fill: AVATAR_PARTS[key].length > 0 ?
            (AVATAR_PARTS[key][0].defaultColors[0]) || null : null
        }
      }), {}) as AvatarPartState
  );

  const updateAvatar = useCallback((name: AvatarPartID, newState) => {
    const updatedState = { ...parts[name], ...newState };
    dispatchParts({
      ...parts,
      [name]: updatedState
    } as AvatarPartState);
  }, [parts, dispatchParts]);

  const partNames = useMemo(() => Object.keys(AVATAR_PARTS) as AvatarPartID[], []);

  const getInputs = useCallback((name: AvatarPartID) => {
    const { cIndex, fill } = parts[name];
    const selectedParts = AVATAR_PARTS[name];
    const { defaultColors } = selectedParts[cIndex];

    return (
      <Palette key={name}
        title={name}
        selected={fill}
        onSelect={({ target }: React.ChangeEvent<HTMLInputElement>) => {
          updateAvatar(name, { fill: target.value });
        }}
      >
        <PreviewSelector>
          {selectedParts.map(({ component }, index) => {
            const isSelected = cIndex === index;
            return (
              <Preview
                key={name + String(index)}
                selected={isSelected}
                onClick={() => {
                  if (!isSelected) {
                    updateAvatar(name, { cIndex: index });
                  }
                }}
              >
                <svg viewBox={BOUNDS[name].map(String).join(', ')}>
                  {component({ fill })}
                </svg>
              </Preview>
            )
          })}
        </PreviewSelector>
        <ColorSwatch
          selected={fill}
          colors={defaultColors}
          onSelect={(color) => { updateAvatar(name, { fill: color }); }}
        />
      </Palette>
    );
  }, [parts]);


  const getAvatarPart = useCallback((name: AvatarPartID) => {
    const { cIndex, fill  } = parts[name];
    const { component } = AVATAR_PARTS[name][cIndex];

    return (<React.Fragment key={name}>{component({ fill })}</React.Fragment>);
  }, [parts]);


  return (<>
    <Head title='Home' />
    <div id='wrapper' className='container'>

      <AvatarImage>
        {partNames.map(getAvatarPart)}
      </AvatarImage>

      <PaletteContainer>
        {partNames.map(getInputs)}
      </PaletteContainer>

    </div>
  </>);
}

export default IndexPage;

