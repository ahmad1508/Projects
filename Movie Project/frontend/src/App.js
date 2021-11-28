import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import Layout from './components/Layout';
import Home from "./pages/Home";

const theme = createTheme({
  palette: {
    primary: {
      main: '#424242'
    },
    secondary: blue,
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,

  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </Layout>

      </Router>
    </ThemeProvider>
  );
}

export default App;
