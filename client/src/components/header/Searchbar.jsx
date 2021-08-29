import { makeStyles, alpha, InputBase } from '@material-ui/core'
import React from 'react'
import { Search } from '@material-ui/icons'

const useStyle = makeStyles((theme) => ({
    search: {
        borderRadius: 2,
        backgroundColor: '#fff',
        marginRight: theme.spacing(2),
        marginLeft: 10,
        width: '38%',
        display: 'flex',
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        color: 'purple'
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%'
      },
      inputInput: {
        paddingLeft: 20,
      },
}))

function Searchbar() {
    const classes = useStyle();
    return (
        <div className={classes.search}>
            
            <InputBase
              placeholder="Search for products, brands and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
              <Search />
            </div>
          </div>
    )
}

export default Searchbar
