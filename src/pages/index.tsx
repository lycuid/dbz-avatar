import React, { useEffect, useCallback, useState } from 'react';
import './index.css';

import SEO from '../components/seo';
// import AvatarImage from '../components/AvatarImage/avatarimage.component';
import { useStateReducer } from '../utils/hooks';

import { Face1 } from '../components/AvatarFace/avatarface.component';
import { Eyes1 } from '../components/AvatarEyes/avatareyes.component';
import { Nose1 } from '../components/AvatarNose/avatarnose.component';
import { Mouth1 } from '../components/AvatarMouth/avatarmouth.component';
import { Hair1 } from '../components/AvatarHair/avatarhair.component';


type PartName = 'face' | 'eyes' | 'nose' | 'mouth' | 'hair';
interface Part {
  component: React.FC<any>,
  defaultColors: string[]
}
type AvatarParts = { [index in PartName]: Part[] };


const AVATAR_PARTS: AvatarParts = {
  face: [
    {
      component: Face1,
      defaultColors: ['#E8BB9E']
    },
  ],
  eyes: [
    {
      component: Eyes1,
      defaultColors: ['#000000'],
    },
  ],
  nose: [
    {
      component: Nose1,
      defaultColors: ['#000000'],
    },
  ],
  mouth: [
    {
      component: Mouth1,
      defaultColors: [],
    },
  ],
  hair: [
    {
      component: Hair1,
      defaultColors: ['#000000'],
    },
  ],
};

const getPartNames = () => Object.keys(AVATAR_PARTS) as PartName[];


const CustomColorInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <label htmlFor={props.id || ''}>
      <small>set custom color:</small>
      <input {...props} type='color' />
    </label>
  );
}

interface SelectionContainerProps {
  title: string,
  defaults: string[],
  selected: string,
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined,
}

const SelectionContainer: React.FC<SelectionContainerProps> = ({
  title,
  defaults,
  selected,
  onSelect
}) => {
  return (<>
    <div className='selection-container'>
      <h3>{title.toUpperCase()}</h3>

      {defaults.map((color, key) => (
        <span key={color + String(key)} style={{ width: '100px', height: '100px', backgroundColor: color }} />
      ))}

      {selected &&
        <CustomColorInput value={selected} name={title} id={title}
          onChange={onSelect}
        />
      }
    </div>
  </>);
}

interface IndexPageProps { }

const IndexPage: React.FC<IndexPageProps> = () => {

  const [parts, dispatchParts] = useStateReducer(
    (Object.keys(AVATAR_PARTS) as PartName[])
      .reduce((acc, key) => ({
        ...acc,
        [key]: {
          cIndex: AVATAR_PARTS[key].length > 0 ? 0 : null,
          fill: AVATAR_PARTS[key].length > 0 ?
            (AVATAR_PARTS[key][0].defaultColors[0]) || null : null
        }
      }), {})
  );


  const getInputs = useCallback((name: PartName) => {
    const { cIndex, fill } = parts[name];
    const { defaultColors } = AVATAR_PARTS[name][cIndex];

    return (
      <SelectionContainer key={name}
        title={name}
        defaults={defaultColors}
        selected={fill}
        onSelect={({ target }: React.ChangeEvent<HTMLInputElement>) => {
          dispatchParts({ [name]: { cIndex, fill: target.value } });
        }}
      />
    );
  }, [parts]);


  const getPart = useCallback((name: PartName) => {
    const { cIndex, fill  } = parts[name];
    const { component } = AVATAR_PARTS[name][cIndex];

    return (<React.Fragment key={name}>{component({ fill })}</React.Fragment>);
  }, [parts]);


  return (<>
    <SEO title='Home' />
    <header style={{
      width: '100%',
      minHeight: '100vh',
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        width: '200px',
        height: '200px',
        alignSelf: 'center',
      }}>
        <svg viewBox='0 0 200 200'>
          {getPartNames().map(getPart)}
        </svg>
      </div>
      <div className='selections'
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
        }}
      >
        {getPartNames().map(getInputs)}
      </div>
    </header>
  </>);
}

export default IndexPage;
