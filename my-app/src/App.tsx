import React from 'react';
import {useHotkeys} from 'react-hotkeys-hook';
import {Link} from 'react-router-dom';
import Dialog from "./dialog";
import logo from "./logo.svg";
import './App.css';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const App = (): JSX.Element => {
  const [showDialog, setShowDialog] = React.useState(false);

  useHotkeys('ctrl+shift+f2', () => {
    setShowDialog(true);
  });

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <div>
            <Button variant="contained" color='error' style={{padding: '1rem'}} size="large"
                    onClick={() => setShowDialog(true)}>نمایش دیالوگ</Button>
            {showDialog && <Dialog isOpen={showDialog} onClose={() => setShowDialog(false)}/>}
            <Typography style={{display: 'flex', direction: 'rtl'}} id="modal-modal-description" sx={{mt: 2}}>
              برای نمایش دیالوگ می توانید کلیدهای ترکیبی ctrl + shift + f2 را نیز فشار دهید
            </Typography>
          </div>
          <div>
            <nav>
              <ul style={{display: 'flex', listStyle: 'none'}}>
                <li style={{fontSize: '16px', margin: '1rem'}}>
                  <Link style={{textDecorationLine: 'unset'}} to="/users">کاربران</Link>
                </li>
                <li style={{fontSize: '16px', margin: '1rem'}}>
                  <Link style={{textDecorationLine: 'unset'}} to="/products">محصولات</Link>
                </li>
                <li style={{fontSize: '16px', margin: '1rem'}}>
                  <Link style={{textDecorationLine: 'unset'}} to="/verification">تایید</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
  );
}
export default App
