import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LogIn } from './components/LogIn'
import { Register } from './components/Register'
import { Homepage } from './components/Homepage'
import { Dashboard } from './components/Dashboard'

import { MuiThemeProvider } from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

const theme = createTheme()

function App() {
  return(
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
