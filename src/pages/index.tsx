import React from 'react';
import './index.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import AvatarImage from '../components/AvatarImage/avatarimage.component';
import { useStateReducer } from '../utils/hooks';


const defaultColors = {
  face: '#E8BB9E',
  eyes: '#000000',
  nose: '#000000',
  hair: '#000000',
};

interface IndexPageProps { }

const IndexPage: React.FC<IndexPageProps> = () => {
  const [colors, dispatchColors] = useStateReducer(defaultColors);
  return (
    <Layout>
      <SEO title='Home' />
      <header style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          width: '200px',
          height: '200px',
        }}>
          <AvatarImage colors={colors} />
          <ul>
            {Object.keys(defaultColors).map((key) => (
              <li key={key}>
                <label htmlFor={key}>
                  {key}
                  <input
                    id={key}
                    name={key}
                    type='color'
                    value={colors[key] || ''}
                    onChange={({ target }) => {
                      dispatchColors({ [key]: target.value });
                    }}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </Layout>
  );
}

export default IndexPage;
