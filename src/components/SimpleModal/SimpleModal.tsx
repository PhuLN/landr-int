import React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

const styles = (theme: Theme) => {
  return createStyles({});
};
interface IProps extends WithStyles<typeof styles> {
  open: boolean;
  onClose: (value: string) => void;
}

const SimpleDialog: React.FC<IProps> = (props) => {
  const { onClose, open } = props;

  return (
    <Dialog onClose={() => onClose("")} open={open} maxWidth={"xl"}>
      {props.children}
    </Dialog>
  );
};

export default withStyles(styles)(SimpleDialog);
