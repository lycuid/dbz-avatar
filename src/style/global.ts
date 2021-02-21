import { Fragment } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
// @ts-ignore
import background from '../Images/background.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  min-height: 100vh;
`;

export const Container = styled.div`
  text-align: center;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 576px) { width: 90%; }
  @media (min-width: 576px) { width: 540px; }
  @media (min-width: 768px) { width: 730px; }
  @media (min-width: 992px) { width: 970px; }
  @media (min-width: 1200px) { width: 1170px; }
`;

/* reference: https://nostalgic-css.github.io/NES.css/ */
export const Retro = styled(Fragment)`
  position: relative;
  border-color: var(--color-primary);
  margin: 6px;
  border-style: solid;
  border-width: 4px;
  background-color: var(--color-bg-secondary);

  border-image-slice: 3;
  border-image-width: 3;
  border-image-repeat: stretch;
  border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(72, 84, 96)" /></svg>');
  border-image-outset: 2;
`;

export const RetroSelectionCSS = css`
  background-color: #00000017;
  box-shadow: inset 5px 5px rgba(0, 0, 0, .2);
`;

export const RetroButton = styled(Retro)`
  ::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    bottom: -4px;
    right: -4px;
    box-shadow: inset -5px -5px rgba(0, 0, 0, .12);
  }

  :active::after {
    ${RetroSelectionCSS}
  }
`;

export const Label = styled.label`
  ${({ muted }) => muted ? 'color: #48546090;' : ''}
`;

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #485460;

    --color-bg-primary: #dfdbe5;
    --color-bg-secondary: #ffffff;
  }

  * {
    color: var(--color-primary);
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
  }

  html, body {
    padding: 0;
    margin: 0;
    height: 100vh;

    background-repeat: repeat;
    background-color: #70a1ff;
    background-image: url(${background});
  }

  hr {
    width: 90%;
    border-top: 1px solid var(--color-primary);
  }

  button,
  a${RetroButton} {
    cursor: pointer;
    outline: none;
    padding: .1em 2em;
  }

  .primary {
    background-color: #ff6b81!important;
    color: #ffffff!important;
  }
`;

export default GlobalStyle;
