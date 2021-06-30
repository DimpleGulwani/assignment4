import { makeStyles,InputBase} from "@material-ui/core";
import {Search} from '@material-ui/icons';
const usestyle= makeStyles((theme)=>({search: {
  borderRadius: 2,
  marginLeft: 10,
  width: '38%',
  backgroundColor: '#fff',
  display: 'flex'
},
searchIcon: {
  marginLeft: 'auto',
  padding: 5,
  display: 'flex',
  color: 'blue'
},
inputRoot: {
  fontSize: 'unset',
  width: '100%'
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

const SearchBar=()=>{
    const classes=usestyle();
    return(
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search for products"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
    )
}
export default SearchBar;