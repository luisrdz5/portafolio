import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import '../styles/components/Layout.styl';



const Layout = ({ children }) => {

  return (
      <div className='Wrapper'>
        <div className="Main">
            {children}
          <Footer />
        </div>
      </div>
  );
}
export default Layout;