import { Grid, Hidden, Paper, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ActionCard from "../../components/ActionCard";
import ListItem from "./listItem";

const Dashboard = () => {
  const dispatch = useDispatch();
  const manager = useSelector(({ manager }) => manager);

  return (
    <div>
      {manager && manager.data.length > 0 && (
        <>
          <Hidden xsDown>
            <ActionCard>
              <Grid container spacing={3} alignContent="center">
                <Grid item md={4}>
                  <Typography variant="h6" color="textSecondary">
                    Title
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography variant="h6" color="textSecondary">
                    Name
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography variant="h6" color="textSecondary">
                    User
                  </Typography>
                </Grid>
              </Grid>
            </ActionCard>
          </Hidden>

          {manager &&
            manager.data.map((item) => <ListItem key={item.id} data={item} />)}
        </>
      )}
    </div>
  );
};

export default Dashboard;
