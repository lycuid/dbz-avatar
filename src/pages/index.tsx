import React, { useCallback, useState } from 'react';
import './index.css';

import Head from '../components/head';
import Header from '../components/Header/header.component';
import Main from '../components/Main/main.component';
import Footer from '../components/Footer/footer.component';

import { AVATAR_PARTS } from '../configs';
import { useStateReducer } from '../utils/hooks';
import { AppContext } from '../context';


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

  // updates `avatar image` based on AvatarPartID.
  const updateAvatar = useCallback((name: AvatarPartID, newState) => {
    const updatedState = { ...parts[name], ...newState };
    dispatchParts({
      ...parts,
      [name]: updatedState
    } as AvatarPartState);
  }, [parts, dispatchParts]);

  // returns the selected `part` component, default colors and selected color.
  const getAvatarPart = useCallback((partID: AvatarPartID) => {
    const { cIndex, fill } = parts[partID];
    return { ...AVATAR_PARTS[partID][cIndex], cIndex, fill};
  }, [parts]);

  return (<>
    <AppContext.Provider value={{ updateAvatar, getAvatarPart }}>
      <Head title='Home' />
      <div id='wrapper'>
        <Header />
        <Main />
        <Footer />
      </div>
    </AppContext.Provider>
  </>);
}

export default IndexPage;

