import React, { useState } from "react";
import {
  Box,
  Button,
  createStyles,
  TextField,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import { useStoreActions } from "../../redux/typedHooks";
import { IContact } from "../../redux/typings/IContact";

interface IProps extends WithStyles<typeof styles> {
  contact?: IContact;
  onSubmit: (contact: IContact) => void;
}

const styles = (theme: Theme) => {
  return createStyles({
    formContainer: {
      "& .MuiTextField-root": {
        margin: theme.spacing(2),
      },
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "flex-end",
      margin: theme.spacing(2),
    },
  });
};

const NewContactForm: React.FC<IProps> = (props) => {
  const { contact } = props;

  const [name, setName] = useState(contact ? contact.name : "");
  const [jobTitle, setJobTitle] = useState(contact ? contact.jobTitle : "");
  const [address, setAddress] = useState(contact ? contact.address : "");
  const [email, setEmail] = useState(contact ? contact.email : "");
  const [phoneNumbers, setPhoneNumbers] = useState(
    contact ? contact.phoneNumbers.join("\n") : ""
  );
  const [pictureUrl, setPictureUrl] = useState(contact ? contact.picture : "");

  function render(): JSX.Element {
    const { classes } = props;
    return (
      <>
        <Box className={classes.formContainer}>
          <form
            onSubmit={() => {
              handleFormSubmission();
            }}
          >
            <div>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                id="jobTitle"
                label="Job title"
                variant="outlined"
                value={jobTitle}
                onChange={(event) => setJobTitle(event.target.value)}
              />
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
            <div>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextField
                id="phones"
                label="Phone numbers (max 3)"
                variant="outlined"
                multiline={true}
                rowsMax={5}
                value={phoneNumbers}
                onChange={(event) => setPhoneNumbers(event.target.value)}
              />
              <TextField
                id="picture"
                label="Picture url (optional)"
                variant="outlined"
                value={pictureUrl}
                onChange={(event) => setPictureUrl(event.target.value)}
              />
            </div>

            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleFormSubmission();
                }}
              >
                Submit
              </Button>
            </div>
          </form>
        </Box>
      </>
    );
  }

  function handleFormSubmission() {
    props.onSubmit({
      id: contact?.id || 0,
      name,
      email,
      address,
      phoneNumbers: phoneNumbers.split("\n"),
      jobTitle,
      picture: pictureUrl,
    });
  }

  return render();
};

export default withStyles(styles)(NewContactForm);
