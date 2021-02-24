
import React, { useState, useContext } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

const SignIn = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [isSubmitting, setSubmitting] = useState(false);
 
  const history = useHistory();

  const handleChange = (e) => {
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(state.username === "admin@chipmonk" && state.password === "admin@123") {
      setSubmitting(true);
      history.push("/table");
    }else(
      alert(('Please enter correct credentials!'))
    )
    


  };
  return (
    <div >
      <Grid container spacing={3} alignContent="center" justify="center">
        <Grid item xs={12}  >
          <form autoComplete={false} onSubmit={handleSubmit}>
            <Typography variant="h6" style={{color:"blue"}}>SignIn</Typography>
            <TextField
              style={{ marginBottom: 12, marginTop:30 }}
              value={state.email}
              name="username"
              placeholder="user name"
              label="User Name"
              variant="outlined"
              color="primary"
              onChange={(e) => handleChange(e)}
              fullWidth
              disabled={isSubmitting}
            />

            <TextField
              style={{ marginBottom: 15 }}
              name="password"
              type="password"
              value={state.password}
              placeholder="password"
              label="Password"
              variant="outlined"
              color="primary"
              onChange={(e) => handleChange(e)}
              fullWidth
              disabled={isSubmitting}
            />

            <div style={{ textAlign: "center" }}>
              <Button
                startIcon={isSubmitting && <CircularProgress />}
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
             </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn