import React, { FunctionComponent } from 'react';
import './aladdin-header.scss';

export interface AladdinHeaderProps {
  headerType?: string;
}

export const AladdinHeader: FunctionComponent<AladdinHeaderProps> = (props) => {
  const DEFAULT_HEADER_TYPE = 'h1';
  const headerType = props.headerType ?? DEFAULT_HEADER_TYPE;
  const elements = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  };

  return React.createElement(elements[headerType], null, props.children);
};

export default AladdinHeader;
