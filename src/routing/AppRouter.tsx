import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import ContactListPage from "../components/ContactListPage/ContactListPage";
import ContactPage from "../components/ContactPage/ContactPage";
import Page from "../components/Page/Page";

function _AppRouter() {
  return (
    <Switch>
      {renderOtherPage()}
      {renderPage()}
    </Switch>
  );

  function renderPage() {
    return (
      <Route path="">
        <Page isNavigationVisible={true}>
          <ContactListPage />
        </Page>
      </Route>
    );
  }

  function renderOtherPage() {
    return (
      <Route path="/contact/:id">
        <Page isNavigationVisible={true}>
          <ContactPage />
        </Page>
      </Route>
    );
  }
}

export const AppRouter = withRouter(_AppRouter);
