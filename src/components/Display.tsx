import React, { useState } from "react";
import useUrlStore from "../store/useUrlStore";

import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100vw",
      height: "92vh",
    },
  }),
);

const Display: React.FC = () => {
  const classes = useStyles();
  const url = useUrlStore((state) => state.url);
  return (
    <div className={classes.root}>
      <iframe className={classes.root} src={url} title="browser" />
    </div>
  );
};
export default Display;
