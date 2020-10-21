import React from "react";
import {
  WithStyles,
  AppBar,
  Toolbar,
  withStyles,
  Theme,
  createStyles,
  Typography,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

interface IProps extends WithStyles<typeof styles> {}

const styles = (theme: Theme) => {
  return createStyles({
    title: {
      marginRight: theme.spacing(2),
    },
  });
};

const Navigation: React.FC<IProps> = (props) => {
  const { classes } = props;
  const history = useHistory();

  function render(): JSX.Element {
    return (
      <AppBar style={{ background: "white" }}>
        <Toolbar>
          <Button
            variant={"text"}
            className={classes.title}
            onClick={() => history.push("/")}
          >
            <Typography noWrap style={{ fontWeight: "bold" }}>
              Contact book
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    );
  }

  return render();
};

export default withStyles(styles)(Navigation);
