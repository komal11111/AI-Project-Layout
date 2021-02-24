import { makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme) => ({
  actionCard: {
    display: 'grid',
    gridTemplate: '"c secondary" / auto max-content',

    '& + &': {
      marginTop: theme.spacing(2)
    }
  },

  withSecondaryAction: {}, // don't delete this, its used below, but has to be declared here

  buttonContainer: {
    display: 'grid',
    gridTemplate: '"c icon" / auto min-content',
    padding: theme.spacing(2),

    '&$withSecondaryAction + span': {
      background: 'linear-gradient(90deg, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)'
    }
  },

  actionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gridArea: 'c'
  },

  iconContainer: {
    gridArea: 'icon',
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  secondaryContainer: {
    minWidth: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    '& button': {
      minWidth: 'auto'
    }
  },

  icon: {
    pointerEvents: 'auto',
    marginLeft: theme.spacing(2)
  },

  zeroState: {
    backgroundColor: 'rgb(245, 248, 250)'
  },

  fsMasked: {
    // Yikes that's a little convoluted
    '& div > div > div > *': {
      display: 'inline-block',
      width: 'max-content',
      background: theme.palette.mask,
      color: theme.palette.mask,
      minWidth: '50%',
      marginBottom: '4px',
      ':last-child': {
        marginBottom: '0'
      }
    }
  },

  notClickable: {
    margin: '0 12px 0 44px',
    pointerEvents: 'none'
  },
  bottomContainer: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    minWidth: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gridRow: 12
  }
}))

export default styles
