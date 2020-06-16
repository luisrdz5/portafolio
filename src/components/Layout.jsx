import React from 'react';
import Footer from './Footer';
import '../styles/components/Layout.styl';

const Layout = ({ children }) => (
  <div className='Wrapper'>
    <div className="Main">
        {children}
      <Footer />
    </div>
  </div>
);

export default Layout;