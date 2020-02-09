import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ShowList } from 'components/ShowList'
import { ShowDetail } from 'components/showDetail'

export const App = () => {

  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <ShowList />
        </Route>
        <Route path="/shows/id/:showId">
          <ShowDetail />
        </Route>

      </Switch>
      <footer> ©2020 Nasim Mahzoun </footer>
    </BrowserRouter>

  )
}
