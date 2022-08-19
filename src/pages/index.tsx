import React, { useMemo } from 'react';

import Header from '../components/Header/header.component';
import Main from '../components/Main/main.component';
import Footer from '../components/Footer/footer.component';

import {
  AVATAR_PART_IDS,
  AVATAR_PART_CONFIGS,
  AVATAR_PARTS_QUEUE,
} from '../configs';
import { useStateReducer } from '../utils/hooks';
import { AppContext } from '../context';

interface IndexPageProps { }

const IndexPage: React.FC<IndexPageProps> = () => {
  const [parts, dispatchParts] = useStateReducer<AvatarParts>(
    AVATAR_PART_IDS.reduce((acc, part) => {
      const parts = AVATAR_PARTS_QUEUE.find(({ id }) => id === part);
      return {
        ...acc,
        [part]: {
          index: parts?.components.length ? 0 : null,
          fill: AVATAR_PART_CONFIGS[part].defaultColors[0] || null,
        },
      };
    }, {}) as AvatarParts
  );

  const avatar: AvatarHandler = useMemo(
    () => ({
      // returns the selected `part` component, default colors and selected color.
      get: (partID) => {
        return { ...parts[partID], ...AVATAR_PART_CONFIGS[partID] };
      },

      // updates `avatar image` based on AvatarPartID.
      update: (partID, newState) => {
        dispatchParts({ ...parts, [partID]: { ...parts[partID], ...newState } });
      },
    }),
    [parts, dispatchParts]
  );

  return (
    <>
      <AppContext.Provider value={{ avatar }}>
        <Header />
        <Main />
        <Footer />
      </AppContext.Provider>
    </>
  );
};

export default IndexPage;
