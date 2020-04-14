import React from 'react';
import './layout.css';

interface LayoutProps { }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (<main>{children}</main>);
}

export default Layout;
