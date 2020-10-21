import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  createStyles,
  Fab,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useStoreActions, useStoreState } from "../../redux/typedHooks";
import ContactBox from "../ContactBox/ContactBox";
import { IContact } from "../../redux/typings/IContact";
import { useHistory } from "react-router-dom";
import SimpleModal from "../SimpleModal/SimpleModal";
import NewContactForm from "../NewContactForm/NewContactForm";

interface IProps extends WithStyles<typeof styles> {}

const styles = (theme: Theme) => {
  return createStyles({
    contactListContainer: {
      display: "flex",
      flexWrap: "wrap",
      flexFlow: "row",
      justifyContent: "center",
    },
    floatingButtonPlacement: {
      position: "fixed",
      bottom: theme.spacing(5),
      right: theme.spacing(5),
    },
    contactContainer: {
      flex: `0 1 calc(20% - ${theme.spacing(2)}px)`,
    },
  });
};

const ContactListPage: React.FC<IProps> = (props) => {
  const { classes } = props;
  const history = useHistory();

  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const fetchAllContacts = useStoreActions(
    (actions) => actions.contacts.fetchContacts
  );
  const addNewContact = useStoreActions(
    (actions) => actions.contacts.addNewContact
  );

  const contacts = useStoreState((state) => state.contacts.contacts);

  useEffect(() => {
    fetchAllContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function render(): JSX.Element {
    return (
      <>
        <Container>
          <Box className={classes.contactListContainer}>
            {renderIndividualContacts()}
          </Box>
          <Box className={classes.floatingButtonPlacement}>
            <Fab
              color="primary"
              aria-label="add"
              onClick={() => setIsContactFormOpen(true)}
            >
              <AddIcon />
            </Fab>
            <SimpleModal
              open={isContactFormOpen}
              onClose={() => setIsContactFormOpen(false)}
            >
              <NewContactForm onSubmit={handleNewContactSubmission} />
            </SimpleModal>
          </Box>
        </Container>
      </>
    );
  }

  function renderIndividualContacts(): JSX.Element {
    return (
      <>
        {contacts.map((contact) => {
          return (
            <Box
              key={contact.id}
              onClick={() => handleContactClick(contact)}
              className={classes.contactContainer}
            >
              <ContactBox contactInfo={contact} />
            </Box>
          );
        })}
      </>
    );
  }

  function handleContactClick(contact: IContact) {
    history.push(`/contact/${contact.id}`);
  }

  function handleNewContactSubmission(contact: IContact) {
    addNewContact(contact);
    setIsContactFormOpen(false);
  }

  return render();
};

export default withStyles(styles)(ContactListPage);
