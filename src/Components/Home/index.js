import React from 'react'

//components
import Header from '../Header'

//styles                                                                                                               
import { useTheme } from '@material-ui/core/styles'                                                                    
import useMediaQuery from '@material-ui/core/useMediaQuery'                                                            
import styles from './styles'   

const Home = () => {

    const theme = useTheme()                                                                                           
    const mobile = useMediaQuery(theme.breakpoints.down('sm'))                                                         
    const classes = styles({ mobile: mobile })   

    return (
        <div>
            <Header/>
            <div className={classes.root}>Home component</div>    
        
        </div>
    )
}

export default Home