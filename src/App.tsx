import React from "react";
import "./App.css";
import Display from "./components/Display";
import AddressBar from "./components/AddressBar";

import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100vh",
      backgroundColor: "#ededed",
    },
  }),
);

interface AppProps {}

const App: React.FC = ({}: AppProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AddressBar />
      <Display />
    </div>
  );
};

export default App;
