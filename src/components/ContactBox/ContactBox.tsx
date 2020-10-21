import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
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
    picture: {
      maxHeight: "125px",
      maxWidth: "125px",
    },
    centerText: {
      textAlign: "center",
    },
    root: {
      margin: theme.spacing(2),
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
              <CardMedia
                component="img"
                alt={contactInfo.name}
                height="140"
                className={classes.picture}
                image={contactInfo.picture || "https://i.imgur.com/doC6zz7.png"}
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
            <CardActions>
              <Button size="small" color="primary">
                View details
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </>
    );
  }
  return render();
};

export default withStyles(styles)(ContactBox);
