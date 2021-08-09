import React from 'react';
import StyledPreview from './preview.style';

interface PreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  selected: boolean;
}

const Preview: React.FC<PreviewProps> = (props) => <StyledPreview {...props} />;

export default Preview;
