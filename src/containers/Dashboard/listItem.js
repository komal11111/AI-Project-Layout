import React from "react";
import { Fab, Grid, Hidden, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";

import ActionCard from "../../components/ActionCard";

const ListItem = (props) => {
  const { data } = props;

  return (
    <>
      <ActionCard
        // secondaryAction={
        //   <Fab size="small" onClick={() => setAddRepOpen(true)}>
        //     <AddIcon color="primary" />
        //   </Fab>
        // }
      >
        <Grid container spacing={1} alignContent="center">
          <Grid item md={4} sm={12}>
            <Hidden smUp>
              <Typography color="textSecondary" variant="h6">
                Title
              </Typography>
            </Hidden>
            <Typography>{data.title} </Typography>
          </Grid>
          <Grid item md={4} sm={12}>
            <Hidden smUp>
              <Typography color="textSecondary" variant="h6">
                name
              </Typography>
            </Hidden>
            <Typography>{data.name} </Typography>
          </Grid>
          <Grid item md={4} sm={12}>
            <Hidden smUp>
              <Typography color="textSecondary" variant="h6">
                user
              </Typography>
            </Hidden>
            <Typography>{data.owner.login}</Typography>
          </Grid>
        </Grid>
      </ActionCard>
    </>
  );
};

export default ListItem;

// ListItem.PropTypes = {
//   data: PropTypes.shape({}).isRequired,
// };

// ListItem.defaultProps = {
//   data: {},
// };
