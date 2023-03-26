import * as React from 'react';
import Button from "@mui/material/Button";

const MyButton: React.FC = () => {
  return (
      <Button variant="contained" color='success' style={{padding: '1rem'}} size="large"
              onClick={() => alert('اتصال پروژه ها برقرار است')}>تست اتصال پروژه ها</Button>
  )
}

export default MyButton