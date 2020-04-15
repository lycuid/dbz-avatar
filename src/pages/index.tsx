import React, { useCallback, useMemo } from 'react';
import './index.css';

import Head from '../components/head';
import AvatarImage from '../components/AvatarImage/avatarImage.component';
import SelectionContainer from '../components/SelectionContainer/selectionContainer.component';
import SelectionBox from '../components/SelectionBox/selectionBox.component';
import Preview from '../components/Preview/preview.component';
import ColorSelector from '../components/ColorSelector/colorSelector.component';
import PreviewSelector from '../components/PreviewSelector/previewSelector.component';

import { AVATAR_PARTS, BOUNDS } from '../configs';
import { useStateReducer } from '../utils/hooks';


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

  const partNames = useMemo(() => Object.keys(AVATAR_PARTS) as AvatarPartID[], []);

  const getInputs = useCallback((name: AvatarPartID) => {
    const { cIndex, fill } = parts[name];
    const selectedParts = AVATAR_PARTS[name];
    const { defaultColors } = selectedParts[cIndex];

    return (
      <SelectionBox key={name}
        title={name}
        selected={fill}
        onSelect={({ target }: React.ChangeEvent<HTMLInputElement>) => {
          dispatchParts({ [name]: { cIndex, fill: target.value } });
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
                  if (!isSelected)
                    dispatchParts({ [name]: { fill, cIndex: index } });
                }}
              >
                <svg viewBox={BOUNDS[name].map(String).join(', ')}>
                  {component({ fill })}
                </svg>
              </Preview>
            )
          })}
          {/* <Preview>
            <svg viewBox={BOUNDS[name].map(String).join(', ')}>
              {component({ fill })}
            </svg>
          </Preview>
          <Preview>
            <svg viewBox={BOUNDS[name].map(String).join(', ')}>
              {component({ fill })}
            </svg>
          </Preview>
          <Preview>
            <svg viewBox={BOUNDS[name].map(String).join(', ')}>
              {component({ fill })}
            </svg>
          </Preview>
          <Preview>
            <svg viewBox={BOUNDS[name].map(String).join(', ')}>
              {component({ fill })}
            </svg>
          </Preview>
          <Preview>
            <svg viewBox={BOUNDS[name].map(String).join(', ')}>
              {component({ fill })}
            </svg>
          </Preview>
          <Preview>
            <svg viewBox={BOUNDS[name].map(String).join(', ')}>
              {component({ fill })}
            </svg>
          </Preview>
          <Preview>
            <svg viewBox={BOUNDS[name].map(String).join(', ')}>
              {component({ fill })}
            </svg>
          </Preview> */}
        </PreviewSelector>
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
        {partNames.map(getPart)}
      </AvatarImage>

      <SelectionContainer>
        {partNames.map(getInputs)}
      </SelectionContainer>

    </div>
  </>);
}

export default IndexPage;
