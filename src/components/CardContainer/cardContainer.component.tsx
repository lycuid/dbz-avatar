import React, { useContext, useMemo } from 'react';
import './cardContainer.style.css';

import Card from '../__pure__/Card/card.component';
import PreviewSelector from '../PreviewSelector/previewSelector.component';
import SwatchContainer from '../SwatchContainer/swatchContainer.component';
import ColorInput from '../__pure__/ColorInput/colorInput.component';

import { AppContext } from '../../context';
import { AVATAR_PART_IDS } from '../../configs';


interface CardContainerProps { }

const CardContainer: React.FC<CardContainerProps> = () => {
  const { avatarPart } = useContext(AppContext) as AvatarAppContext;

  return (<>
    <div className={'card-container'}>
      {AVATAR_PART_IDS.map((partID, partIndex) => {
        const { defaultColors, fill } = avatarPart.get(partID);

        const footer = useMemo(() => {
          if (fill) {
            return (<ColorInput
              value={fill} name={partID} id={partID}
              onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
                avatarPart.update(partID, { fill: target.value });
              }}
            />)
          }
          return <label className='text-muted'>no color support</label>
        }, [fill, partID, avatarPart]);

        return (
          <Card key={partID + String(partIndex)} title={partID} footer={footer}>

            <PreviewSelector partID={partID} />
            <SwatchContainer
              selected={fill}
              colors={defaultColors}
              onSelect={(color) => { avatarPart.update(partID, { fill: color }); }}
            />
          </Card>
        );
      })}
    </div>
  </>);
}

export default CardContainer;
