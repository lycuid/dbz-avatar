import React from 'react';
import StyledPreview from './preview.style';

export interface PreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  selected: boolean;
}

const Preview: React.FC<PreviewProps> = (props) => <StyledPreview as='div' {...props} />;

export default Preview;
