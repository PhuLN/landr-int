import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  createStyles,
  Theme,
  Typography,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import React from "react";
import { IContact } from "../../redux/typings/IContact";

interface IProps extends WithStyles<typeof styles> {
  contactInfo: IContact;
}

const styles = (theme: Theme) => {
  return createStyles({
    contactContainer: {
      margin: theme.spacing(2),
      maxWidth: 345,
    },
    pictureContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(2),
    },

    centerText: {
      textAlign: "center",
    },
    root: {
      margin: theme.spacing(2),
    },
    largeAvatar: {
      width: "5rem",
      height: "5rem",
      borderRadius: "50%",
      padding: theme.spacing(1),
      boxShadow: "0 0 0 3px #e78267",
    },
  });
};

const ContactBox: React.FC<IProps> = (props) => {
  const { classes, contactInfo } = props;
  function render(): JSX.Element {
    return (
      <>
        <Card className={classes.contactContainer}>
          <CardActionArea>
            <Box className={classes.pictureContainer}>
              <Avatar
                src={contactInfo.picture}
                className={classes.largeAvatar}
              />
            </Box>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.centerText}
              >
                {contactInfo.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.centerText}
              >
                {contactInfo.jobTitle}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    );
  }
  return render();
};

export default withStyles(styles)(ContactBox);
