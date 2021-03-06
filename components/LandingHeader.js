import Image from 'next/image'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Container,
  Typography,
  Fade
} from '@material-ui/core'
import Particles from 'react-particles-js'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  },
  particleWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(45deg, #3c1c94 0%, #6e19c2 100%)',
    height: '100vh',
    '&:before': {
      position: 'absolute',
      content: '""',
      width: '875px',
      height: '300%',
      bottom: '-100%',
      transform: 'rotate(-45deg)',
      background: 'rgba(255, 255, 255, 0.02)',
      left: '50%',
      marginLeft: '-130px'
    },
    '&:after': {
      position: 'absolute',
      content: '""',
      width: '875px',
      height: '300%',
      bottom: '-100%',
      transform: 'rotate(-45deg)',
      background: 'rgba(255, 255, 255, 0.02)',
      right: '50%',
      marginRight: '-110px'
    }
  },
  container: {
    zIndex: 2
  },
  headerText: {
    color: '#fff',
    marginBottom: theme.spacing(3)
  },
  headerSubText: {
    color: '#af9cff',
    lineHeight: 2
  },
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    zIndex: 999,
    transition: 'all .3s ease'
  },
  navWhite: {
    background: '#fff',
    boxShadow: '0px 6px 5px 1px rgba(110, 25, 194, 0.24)'
  },
  navInner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px'
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoText: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginLeft: theme.spacing(2),
    color: '#fff',
    transition: 'all .3s ease'
  },
  logoTextWhite: {
    color: '#222'
  },
  menu: {
    '& ul': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      '& li': {
        display: 'inline-block',
        marginLeft: theme.spacing(3),
        '& a': {
          color: '#fff',
          textDecoration: 'none',
          transition: 'all .3s ease',
          '&:hover': {
            color: '#2bc9b4'
          }
        }
      }
    }
  },
  menuWhite: {
    '& a': {
      color: '#222 !important',
      '&:hover': {
        color: '#6e19c2 !important'
      }
    }
  }
}))

const particleParams = {
  "particles": {
    "number": {
      "value": 100
    },
    "size": {
      "value": 3
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
}

const LandingHeader = props => {
  const classes = useStyles()
  const { scroll } = props

  return (
    <div className={classes.headerWrapper}>
      <Particles
        className={classes.particleWrapper}
        params={particleParams}
      />
      <div className={scroll < 200 ? classes.nav : clsx(classes.nav, classes.navWhite)}>
        <Container maxWidth="lg">
          <div className={classes.navInner}>
            <div className={classes.logo}>
              <Image
                src={scroll < 200 ? '/static/logo-white.png' : '/static/logo-black.png'}
                alt="Drachma Network"
                width={30}
                height={30}
              />
              <div className={scroll < 200 ? classes.logoText : clsx(classes.logoText, classes.logoTextWhite)}>
                Drachma Network
              </div>
            </div>
            <div className={scroll < 200 ? classes.menu : clsx(classes.menu, classes.menuWhite)}>
              <ul>
                <li>
                  <Link href="/generator">
                    <a>Token Generator</a> 
                  </Link>
                </li>
                <li>
                  <Link href="/sender">
                    <a>Multi Sender</a> 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.header}>
        <Container maxWidth="sm" className={classes.container}>
          <Fade
            in={true}
            timeout={4000}
          >
            <Typography 
              variant="h5" 
              className={classes.headerText}
              align="center"
            >
              EVM Compatible Token Manager
            </Typography>
          </Fade>
          <Fade
            in={true}
            timeout={1000}
          >
            <Typography
              variant="body2"
              className={classes.headerSubText}
              align="center"
            >
              We are equipped to provide you with the best Ethereum Virtual Machine(aka. EVM) token development solutions for the aggravation in your business.
            </Typography>
          </Fade>
        </Container>
      </div>
    </div>
  )
}

export default LandingHeader