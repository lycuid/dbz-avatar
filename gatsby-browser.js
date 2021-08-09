import { createElement } from 'react';
import GlobalStyle, { Wrapper } from './src/style/global';

const el = createElement;

export const wrapPageElement = ({ element, props }) => [
  el(GlobalStyle, { key: 'global-style' }),
  el(Wrapper, { key: 'wrapper', ...props }, element),
];
