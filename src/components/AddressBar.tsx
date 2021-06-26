import React, { useState } from "react";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import useUrlStore from "../store/useUrlStore";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "7.1vh",
      background: "#474747",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      color: "white",
    },
    urlArea: {
      width: "70%",
      background: "#303030",
      color: "white",
    },
  }),
);

const AddressBar: React.FC = () => {
  const classes = useStyles();
  const url = useUrlStore((state) => state.url);
  const setURL = useUrlStore((state) => state.setURL);
  const [prevStack, setPrevStack] = useState<string[]>([]);
  const [nextStack, setNextStack] = useState<string[]>([]);

  const [localURL, setLocalURL] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPrevStack((state) => [...state, url]);
    setURL(localURL);
  };

  const goBack = () => {
    const temp = [...prevStack];
    const cur = temp.pop()!;
    setNextStack([...nextStack, url]);
    setURL(cur);
    setPrevStack(temp);
    setLocalURL(cur);
  };
  const goNext = () => {
    const temp = [...nextStack];
    const cur = temp.pop()!;
    setPrevStack([...prevStack, url]);
    setURL(cur);
    setLocalURL(cur);
    setNextStack(temp);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      autoComplete="off"
      className={classes.root}
    >
      <div>
        <Button
          disabled={0 === prevStack.length}
          onClick={goBack}
          color="inherit"
          variant="text"
        >
          {"<"}
        </Button>
        <Button
          disabled={0 === nextStack.length}
          onClick={goNext}
          color="inherit"
          variant="text"
        >
          {">"}
        </Button>
        <Button
          onClick={() => setURL(localURL + " ")}
          color="inherit"
          variant="text"
        >
          {"r"}
        </Button>
      </div>
      <TextField
        color="secondary"
        className={classes.urlArea}
        size="small"
        variant="outlined"
        value={localURL}
        onChange={(e) => setLocalURL(e.target.value)}
      />
    </form>
  );
};
export default AddressBar;
