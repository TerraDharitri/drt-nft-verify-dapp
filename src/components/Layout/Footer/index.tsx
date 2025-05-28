import React from 'react';
import { ReactComponent as DharitriLogo } from 'assets/img/dharitri.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <a
          {...{
            target: '_blank'
          }}
          href='https://dharitri.org/'
        >
          <span>Powered by</span>
          <DharitriLogo className='mutliversx-logo' />
        </a>
      </div>
    </footer>
  );
};
