import * as React from 'react';
import './Loader.sass';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ILoader {}

// eslint-disable-next-line no-empty-pattern
const Loader: React.FC<ILoader> = ({}) => {
  return <div className="spinner"></div>;
};

export default Loader;
