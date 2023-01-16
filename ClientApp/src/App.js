import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './Styles/custom.css';

// const setAuthToken = token => {
//   if (token) {
//     axios.defaults.headers.common["Authorization"] = Bearer $(token);
//   }
//   else {
//     delete axios.defaults.headers.common["Authorization"];
//   }
// }

export default class App extends Component {
  static displayName = App.name;

  render() {
    // const token = sessionStorage.getItem('token')
    // if (token) setAuthToken(token)

    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}
