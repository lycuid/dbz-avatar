import { createElement } from 'react';
import Package from './package.json';
import GlobalStyle, { Wrapper } from './src/style/global';

const el = createElement;

export const wrapPageElement = ({ element, props }) => [
  el(GlobalStyle, null),
  el(Wrapper, props, element),
];

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  replaceHeadComponents([
    el('title', null, `${Package.name} | ${Package.description}`),
    el('meta', { name: 'description', content: Package.description }),
    el('meta', { property: 'og:title', content: Package.name }),
    el('meta', { property: 'og:description', content: Package.description }),
    el('meta', { property: 'og:type', content: 'website' }),
    el('meta', { name: 'twitter:card', content: 'summary' }),
    el('meta', { name: 'twitter:creator', content: '@lycuid' }),
    el('meta', { name: 'twitter:title', content: Package.name }),
    el('meta', { name: 'twitter:description', content: Package.description }),
    ...getHeadComponents(),
  ]);
}
