import React from "react";
import zh_TW from 'antd/lib/locale-provider/zh_TW';

import { Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import { ResetStyle, GlobalStyle } from './style';

import ScenicSpot from "./pages/scenicSpot/index";


function App() {
  return (
    <Fragment>
      <ConfigProvider locale={zh_TW}>
        <ResetStyle />
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path="/scenicSpot/:city?" exact component={ScenicSpot} />
            <Redirect to="/scenicSpot"/>
          </Switch>
        </BrowserRouter>

      </ConfigProvider>
    </Fragment>
  );
}

export default App;
