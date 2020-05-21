import React, { useMemo } from 'react';
import GlobalStyle, { Wrapper } from '../style/global';

import Head from '../components/head';
import Header from '../components/Header/header.component';
import Main from '../components/Main/main.component';
import Footer from '../components/Footer/footer.component';

import { AVATAR_PARTS, AVATAR_PART_IDS } from '../configs';
import { useStateReducer } from '../utils/hooks';
import { AppContext } from '../context';


interface IndexPageProps { }

const IndexPage: React.FC<IndexPageProps> = () => {
  const [parts, dispatchParts] = useStateReducer<AvatarPartState>(
    AVATAR_PART_IDS.reduce((acc, key) => ({
      ...acc,
      [key]: {
        id: AVATAR_PARTS.get(key)?.components?.length ? 0 : null,
        fill: AVATAR_PARTS.get(key)?.components?.length ?
          (AVATAR_PARTS.get(key)?.defaultColors[0] || null) : null
      }
    }), {}) as AvatarPartState
  );

  const avatarPart: AvatarPartHandler = useMemo(() => ({
    // returns the selected `part` component, default colors and selected color.
    get: (partID) => {
      const { id, fill } = parts[partID];
      const { components, defaultColors } = AVATAR_PARTS.get(partID) as AvatarPartObject;

      return { component: components[id], defaultColors, id, fill};
    },
    // updates `avatar image` based on AvatarPartID.
    update: (name, newState) => {
      const updatedState = { ...parts[name], ...newState };
      dispatchParts({
        ...parts,
        [name]: updatedState
      } as AvatarPartState);
    },
  }), [parts, dispatchParts]);

  return (<>
    <AppContext.Provider value={{ avatarPart }}>
      <GlobalStyle />
      <Head title='Home' />
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </AppContext.Provider>
  </>);
}

export default IndexPage;

