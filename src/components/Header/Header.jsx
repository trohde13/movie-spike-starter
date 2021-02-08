import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function Header() {

    const history = useHistory();  
    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
    
    });

    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
        }

        setState({ ...state, [anchor]: open });
    };

    // const itemsList = [
    //     {
    //         text: 'Home', 
    //         onClick: () => history.push('/')
    //     }, 
    //     {
    //         text: 'Journal', 
    //         onClick: () => history.push('/journal')
    //     }, 
    //     {
    //         text: 'Add', 
    //         onClick: () => history.push('/add')
    //     }
    // ];
    
    const handleHome = () => {
        history.push('/');
    };

    const handleJournal = () => {
        history.push('/journal');
    };

    const handleAdd = () => {
        history.push('/add');
    };

    return (
        <header className="projectHeader">
            <div>
                <h1>The Movies Saga!</h1>
            </div>
            <div>
            {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                <div
                    className={clsx(classes.list, {
                        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                    })}
                    role="presentation"
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                    >
                    <List>
                        <ListItem autoFocus button onClick={handleHome}>
                            <ListItemAvatar>
                                <Avatar>
                                    <HomeIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem autoFocus button onClick={handleJournal}>
                            <ListItemAvatar>
                                <Avatar>
                                    <BookIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Journal" />
                        </ListItem>
                        <ListItem autoFocus button onClick={handleAdd}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AddIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Add" />
                        </ListItem>
                    </List>
                    
                </div>
                </Drawer>
                </React.Fragment>
            ))}
            </div>
        </header>
    );
}

export default Header;