import React, {useEffect, useRef} from "react";
import styled from 'styled-components';
import {useHotkeys} from 'react-hotkeys-hook';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 2rem;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Dialog = (props: any): JSX.Element => {
  const textFieldRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(props.isOpen);
  }, []);

  useEffect(() => {
    if (props.focusOnMount && textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, [props.focusOnMount]);

  useHotkeys('ctrl+shift+f3', () => {
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  });
  return (
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
      >
        <Box sx={{...style,width: 600}}>
          <Container>
            <FormControl fullWidth sx={{m: 1}} variant="outlined">
              <InputLabel htmlFor="filled-adornment-amount">نام</InputLabel>
              <OutlinedInput
                  id="my-textfield"
                  inputRef={textFieldRef}
                  startAdornment={<InputAdornment position="start"></InputAdornment>}
                  label="Amount"
              />
            </FormControl>
            <Button variant="contained" style={{padding: '1rem'}} size="large" onClick={props.onClose}>بستن</Button>
          </Container>
          <Typography style={{display:'flex',direction:'rtl',color:'green'}} id="modal-modal-description" sx={{ mt: 1,mx:4 }}>
            برای فوکوس بر روی textBox می توانید کلیدهای ترکیبی ctrl + shift + f3 را نیز فشار دهید
          </Typography>
        </Box>
      </Modal>
  );
}

export default Dialog;