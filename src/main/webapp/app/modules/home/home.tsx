import './home.scss';

import { Link } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';
import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  const [displayBasic, setDisplayBasic] = useState(false);
  const [position, setPosition] = useState('center');
  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };
  const onClick1 = name => {
    dialogFuncMap[`${name}`](true);

    // if (position) {
    //    setPosition(position);
    // }
  };

  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const renderFooter = name => {
    return (
      <div>
        <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
        <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
      </div>
    );
  };
  return (
    <>
      <div className="dialog-demo">
        <div className="card">
          <h5>Basic</h5>
          <Button label="Show" icon="pi pi-external-link" onClick={() => onClick1('displayBasic')} />
          <Dialog
            header="Header"
            visible={displayBasic}
            style={{ width: '50vw' }}
            footer={renderFooter('displayBasic')}
            onHide={() => onHide('displayBasic')}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Home;
