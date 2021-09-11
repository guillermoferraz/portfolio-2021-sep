
import React from 'react'
//styles                                                                                                               
import { useTheme } from '@material-ui/core/styles'                                                                    
import useMediaQuery from '@material-ui/core/useMediaQuery'                                                            
import styles from './styles'   

const Header = () => {

    const theme = useTheme()                                                                                           
    const mobile = useMediaQuery(theme.breakpoints.down('sm'))                                                         
    const classes = styles({ mobile: mobile })   

    return (
        <div className={classes.root}>
           asd
        </div>
    )
}

export default Header