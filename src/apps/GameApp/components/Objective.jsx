import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Objective = ({ objective: o }) => (
  <>
    <h3>{o.name}</h3>
    <Typography variant="subtitle1">{o.type}</Typography>
    <Box>{o.description}</Box>
  </>
);

export default Objective;
