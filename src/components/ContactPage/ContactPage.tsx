import {
  Avatar,
  Box,
  Button,
  Container,
  createStyles,
  Paper,
  Theme,
  Typography,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import { action } from "easy-peasy";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useStoreActions, useStoreState } from "../../redux/typedHooks";
import { IContact } from "../../redux/typings/IContact";
import ContactDeletionForm from "../ContactDeletionForm/ContactDeletionForm";
import NewContactForm from "../NewContactForm/NewContactForm";
import SimpleModal from "../SimpleModal/SimpleModal";

interface IProps extends WithStyles<typeof styles> {}

const styles = (theme: Theme) => {
  return createStyles({
    contactContainer: {
      minHeight: "5.5rem",
      padding: theme.spacing(2),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    largeAvatar: {
      width: "5rem",
      height: "5rem",
      borderRadius: "50%",
      padding: theme.spacing(1),
      boxShadow: "0 0 0 3px #e78267",
    },
    titleContainer: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
    },
    contactInfoContainer: {
      padding: theme.spacing(2),
    },
    editButton: {
      marginRight: theme.spacing(2),
    },
  });
};

const ContactPage: React.FC<IProps> = (props) => {
  const { classes } = props;
  const {
    id,
  }: {
    id: string;
  } = useParams();
  const history = useHistory();

  const [isModifyFormOpen, setIsModifyFormOpen] = useState(false);
  const [isDeletionFormOpen, setIsDeletionFormOpen] = useState(false);

  const fetchContactById = useStoreActions(
    (actions) => actions.contacts.fetchContactById
  );
  const modifyContact = useStoreActions(
    (actions) => actions.contacts.modifyExistingContact
  );
  const deleteContact = useStoreActions(
    (actions) => actions.contacts.deleteContact
  );

  const contacts = useStoreState((state) => state.contacts.contacts);

  let selectedContact = contacts.find((contact) => contact.id === parseInt(id));

  useEffect(() => {
    fetchContactById(parseInt(id));
  }, []);

  useEffect(() => {
    selectedContact = contacts.find((contact) => contact.id === parseInt(id));
  }, [contacts]);

  function render(): JSX.Element {
    return (
      <>
        <Container>
          <Paper className={classes.contactContainer}>
            <Avatar
              src={selectedContact?.picture}
              className={classes.largeAvatar}
            />
            <div className={classes.titleContainer}>
              <Typography variant="h5">{selectedContact?.name}</Typography>
              <Typography>{selectedContact?.jobTitle}</Typography>
            </div>
            <div></div>
          </Paper>
          <Box marginY={5}>
            <Paper className={classes.contactInfoContainer}>
              {selectedContact?.phoneNumbers.map((phone, index) => {
                return (
                  <Typography key={phone}>
                    Phone number #{index}: {phone}
                  </Typography>
                );
              })}
              <Typography>Address: {selectedContact?.address}</Typography>
              <Typography>
                Can be reached at {selectedContact?.email}
              </Typography>
            </Paper>
          </Box>
          <Button
            variant="outlined"
            color="primary"
            className={classes.editButton}
            onClick={() => setIsModifyFormOpen(true)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setIsDeletionFormOpen(true)}
          >
            Delete
          </Button>
          {renderModifyForm()}
          {renderDeletionForm()}
        </Container>
      </>
    );
  }

  function renderModifyForm(): JSX.Element {
    return (
      <SimpleModal
        open={isModifyFormOpen}
        onClose={() => setIsModifyFormOpen(false)}
      >
        <NewContactForm
          contact={selectedContact}
          onSubmit={(contact) => {
            modifyContact(contact);
          }}
        />
      </SimpleModal>
    );
  }

  function renderDeletionForm(): JSX.Element {
    return (
      <SimpleModal
        open={isDeletionFormOpen}
        onClose={() => setIsDeletionFormOpen(false)}
      >
        <ContactDeletionForm
          onSubmit={() => {
            if (selectedContact?.id) {
              deleteContact(selectedContact?.id);
              history.push("/");
            }
          }}
        />
      </SimpleModal>
    );
  }

  return render();
};

export default withStyles(styles)(ContactPage);
