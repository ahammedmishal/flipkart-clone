
import { makeStyles,fade,InputBase} from '@material-ui/core';
import {Search} from '@material-ui/icons'



const useStyle = makeStyles(theme => ({
    search: {
        borderRadius: 2,
        marginLeft: 10,
        width: '30%',
        backgroundColor: '#fff',
        display: 'flex'
      },
      searchIcon: {
        marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: '#2874f0'
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%',
        paddingLeft: 20,
      },
      inputInput: {
        paddingLeft: 20,
        width: '100%',
    },
    list: {
      position: 'absolute',
      color: '#000',
      background: '#FFFFFF',
      marginTop: 36
    }
}))


const SearchBar = () => {
    const classes = useStyle();
    return (
        <div className={classes.search}>
            <InputBase
                placeholder="search for products brands and more"
                classes={{
                    root:classes.inputRoot,
                    input:classes.inputinput,
                }}
                inputProps = {{'aria-label':'search'}}
            />

                <div className={classes.searchIcon}>
                        <Search/>
                </div>
        </div>
    )
}

export default SearchBar
