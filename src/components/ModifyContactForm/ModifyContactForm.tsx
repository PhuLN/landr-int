import React from "react";
import {
  Box,
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core";

interface IProps extends WithStyles<typeof styles> {}

const styles = (theme: Theme) => {
  return createStyles({});
};

const Page: React.FC<IProps> = (props) => {
  function render(): JSX.Element {
    return (
      <>
        <Box>
          <form></form>
        </Box>
      </>
    );
  }

  return render();
};

export default withStyles(styles)(Page);
