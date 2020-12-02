import React, { useMemo } from 'react';
import GlobalStyle, { Wrapper } from '../style/global';

import Head from '../components/head';
import Header from '../components/Header/header.component';
import Main from '../components/Main/main.component';
import Footer from '../components/Footer/footer.component';

import { AVATAR_PART_IDS, AVATAR_PART_CONFIGS, AVATAR_PARTS_QUEUE } from '../configs';
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
          fill: AVATAR_PART_CONFIGS[part].defaultColors[0] || null
        }
      }
    }, {}) as AvatarParts
  );

  const avatarPart: AvatarPartHandler = useMemo(() => ({
    // returns the selected `part` component, default colors and selected color.
    get: (partID) => {
      return { ...parts[partID], ...AVATAR_PART_CONFIGS[partID] };
    },

    // updates `avatar image` based on AvatarPartID.
    update: (name, newState) => {
      dispatchParts({ ...parts, [name]: { ...parts[name], ...newState } });
    },
  }), [parts, dispatchParts]);

  return (<>
    <AppContext.Provider value={{ avatarPart }}>
      <GlobalStyle />
      <Head />
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </AppContext.Provider>
  </>);
}

export default IndexPage;

