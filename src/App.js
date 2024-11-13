import React from 'react';
import Button from '@mui/material/Button';
import useStyles from './Styles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>5 Tane Buton</h1>

      <div className={classes.buttonContainer}>
        <Button className={classes.blueButton}>Mavi Buton</Button>
        <Button className={classes.greenButton}>Yeşil Buton</Button>
        <Button className={classes.redButton}>Kırmızı Buton</Button>
        <Button className={classes.yellowButton}>Sarı Buton</Button>
        <Button className={classes.purpleButton}>Mor Buton</Button>
      </div>

      <div className={classes.footer}>created by EspeeeBne</div>
    </div>
  );
}

export default App;
