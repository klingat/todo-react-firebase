import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

export const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
       Kash Lingat
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
