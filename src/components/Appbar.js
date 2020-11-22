import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../elements/Button';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    flexGrow: 1,
    borderBottom: `1px solid ${theme.palette.divider}`,
    
  },

  toolbarTitle: {
    flexGrow: 1,
  },

}));


export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="secondary" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Kelompok 6
          </Typography>
          <Button as="a" href="https://instagram.com/setyawan_af/">
            Andhika
          </Button>
          <Button as="a" href="https://www.instagram.com/murizaal/">
            Rizal
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
