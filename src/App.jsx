
import Button from '@mui/material/Button'

import './App.css'
import { createTheme, ThemeProvider  } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    ochre: {
      main: '#3d7a44',
      light: '#78e185',
      dark: '#78e185',
      contrastText: '#1d1e4e',
    },
  },
})


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <h3>Thank you for visiting this site. My cooking recipe website is coming soon...</h3>
        </div>

        <div className='main__avatar'>
          <img src='public/avatar.svg' alt='avatar' />
        </div>

        <div className='main__button'>
          <Button variant='outlined' color='ochre'><a href='https://tranthanhvi.github.io/portfolio_website/'>Go back to Portfolio</a></Button>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App


