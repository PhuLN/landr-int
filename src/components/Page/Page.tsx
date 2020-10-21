import React from "react";
import {
  Box,
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import Navigation from "../Navigation/Navigation";

interface IProps extends WithStyles<typeof styles> {
  isNavigationVisible: boolean;
}

const styles = (theme: Theme) => {
  return createStyles({});
};

const Page: React.FC<IProps> = (props) => {
  const { isNavigationVisible } = props;
  function render(): JSX.Element {
    return (
      <>
        {isNavigationVisible && <Navigation />}
        <Box marginTop={isNavigationVisible ? "5rem" : "auto"}>
          {props.children}
        </Box>
      </>
    );
  }

  return render();
};

export default withStyles(styles)(Page);
