import React, { useEffect, useCallback, useState } from 'react';
import './index.css';

import { useStateReducer } from '../utils/hooks';

import Head from '../components/head';
import AvatarImage from '../components/AvatarImage/avatarImage.component';
import SelectionContainer from '../components/SelectionContainer/selectionContainer.component';
import SelectionBox from '../components/SelectionBox/selectionBox.component';
import Preview from '../components/Preview/preview.component';

import Faces from '../components/AvatarParts/face';
import Eyes from '../components/AvatarParts/eyes';
import Noses from '../components/AvatarParts/nose';
import Mouths from '../components/AvatarParts/mouth';
import Hairs from '../components/AvatarParts/hair';
import ColorSelector from '../components/ColorSelector/colorSelector.component';


const AVATAR_PARTS: AvatarParts = {
  face: Faces.map((face) => ({
    component: face,
    defaultColors: ['#e8bb9e', '#708090', '#fa8072'],
  })),
  eyes: Eyes.map((eyes) => ({
    component: eyes,
    defaultColors: ['#000000', '#00ffff', '#00ff00', '#ff0000'],
  })),
  nose: Noses.map((nose) => ({
    component: nose,
    defaultColors: ['#000000'],
  })),
  mouth: Mouths.map((mouth) => ({
    component: mouth,
    defaultColors: [],
  })),
  hair: Hairs.map((hair) => ({
    component: hair,
    defaultColors: ['#000000', '#00ff00', '#0000ff', '#ff0000', '#708090', '#fa8072'],
  })),
};

const getPartNames = () => Object.keys(AVATAR_PARTS) as AvatarPartID[];

const BOUNDS = {
  face: [30, 40, 140, 140],
  eyes: [60, 100, 80, 80],
  nose: [90, 140, 20, 20],
  mouth: [80,140, 40, 40],
  hair: [10, 10, 180, 180],
}

interface IndexPageProps { }

const IndexPage: React.FC<IndexPageProps> = () => {

  const [parts, dispatchParts] = useStateReducer(
    (Object.keys(AVATAR_PARTS) as AvatarPartID[])
      .reduce((acc, key) => ({
        ...acc,
        [key]: {
          cIndex: AVATAR_PARTS[key].length > 0 ? 0 : null,
          fill: AVATAR_PARTS[key].length > 0 ?
            (AVATAR_PARTS[key][0].defaultColors[0]) || null : null
        }
      }), {})
  );


  const getInputs = useCallback((name: AvatarPartID) => {
    const { cIndex, fill } = parts[name];
    const { defaultColors, component } = AVATAR_PARTS[name][cIndex];

    return (
      <SelectionBox key={name}
        title={name}
        selected={fill}
        onSelect={({ target }: React.ChangeEvent<HTMLInputElement>) => {
          dispatchParts({ [name]: { cIndex, fill: target.value } });
        }}
      >
        <Preview>
          <svg viewBox={BOUNDS[name].map(String).join(', ')}>
            {component({ fill })}
          </svg>
        </Preview>
        <ColorSelector
          selected={fill}
          colors={defaultColors}
          onSelect={(color) => {
            dispatchParts({ [name]: { cIndex, fill: color } });
          }}
        />
      </SelectionBox>
    );
  }, [parts]);


  const getPart = useCallback((name: AvatarPartID) => {
    const { cIndex, fill  } = parts[name];
    const { component } = AVATAR_PARTS[name][cIndex];

    return (<React.Fragment key={name}>{component({ fill })}</React.Fragment>);
  }, [parts]);


  return (<>
    <Head title='Home' />
    <div id='wrapper' className='container'>

      <AvatarImage>
        {getPartNames().map(getPart)}
      </AvatarImage>

      <SelectionContainer>
        {getPartNames().map(getInputs)}
      </SelectionContainer>

    </div>
  </>);
}

export default IndexPage;
