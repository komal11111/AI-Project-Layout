import React from "react";
import { Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import LoginForm from "../containers/LoginForm"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    align:"center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Grid container spacing={3}>
        <Grid item xs={4} style={{marginTop: "10%",marginLeft:"33%"}}>
          <Paper className={classes.paper}>
            <LoginForm />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
