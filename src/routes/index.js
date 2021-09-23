import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import CreateAndEdit from "../pages/Product/CreateAndEdit";

export default function Routes() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/products/create">
          <Layout>
            <CreateAndEdit />
          </Layout>
        </Route>
        <Route path="/products/edit/:id" exact>
          <Layout>
            <CreateAndEdit />
          </Layout>
        </Route>
        <Route path="/">
          <Layout>produtos</Layout>
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}
