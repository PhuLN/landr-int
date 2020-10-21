import React from "react";
import {
  Box,
  Button,
  createStyles,
  Paper,
  Theme,
  Typography,
  withStyles,
  WithStyles,
} from "@material-ui/core";

interface IProps extends WithStyles<typeof styles> {
  onSubmit: () => void;
}

const styles = (theme: Theme) => {
  return createStyles({});
};

const ContactDeletionForm: React.FC<IProps> = (props) => {
  function render(): JSX.Element {
    return (
      <>
        <Paper>
          <Box p={2}>
            <Box marginBottom={2}>
              <Typography variant="h5">
                Are you sure you want to remove this contact?
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => props.onSubmit()}
              >
                Delete this contact
              </Button>
              <Button variant="text" color="secondary">
                Nevermind
              </Button>
            </Box>
          </Box>
        </Paper>
      </>
    );
  }

  return render();
};

export default withStyles(styles)(ContactDeletionForm);
