import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Box, FormControl, Select, InputLabel, TextField, Button, ButtonGroup, useTheme, useMediaQuery } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));


function AddEntry() {
    console.log('in Add Entry');
    
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const history = useHistory();
    const dispatch = useDispatch();

    // const genreList = useSelector((store) => store.genresReducer)

    const [newMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genre_id: ''
    })

    //pulling in genre data
    // useEffect(() => {
    //     dispatch({ type: 'GET_GENRES' })
    // }, []);


    //function to update state from input fields
    const handleChange = (key, event) => {
        console.log('in handleChange')

        switch(key){
            case 'title':
                setNewMovie({...newMovie, title: event.target.value})
                break;
            case 'poster':
                setNewMovie({...newMovie, poster: event.target.value})
                break;
            case 'description':
                setNewMovie({...newMovie, description: event.target.value})
                break;
            case 'genre':
                setNewMovie({...newMovie, genre_id: event.target.value})
                break;
        }
    }

    //function to add new movie to database and return to movie list
    const handleAddMovie = (event) => {
        console.log('clicked handleAddMovie');



        event.preventDefault();
        //dispatch here
        dispatch({ 
            type: 'ADD_NEW_MOVIE', 
            payload: newMovie 
        });
        setNewMovie({
            title: '',
            poster: '',
            description: '',
            genre_id: ''
        })

        history.push('/');
    }; //end handleAddMovie




    
    //function to cancel adding a movie and return to movie list
    const sendHome = () => {
        history.push('/');
    }; //end sendHome

 


    return (
        <div className={classes.root} >
            <div>
                <h1 className="sectionHeader" color="primary">Add A Movie</h1>
            </div>
            <div>
                <form onSubmit={handleAddMovie}>
                    <div>
                        <FormControl variant="outlined" color="primary">
                            <TextField  
                                id="standard-full-width"
                                label="movie title"
                                style={{ margin: 8 }}
                                margin="normal"
                                InputLabelProps={{
                                  shrink: true,
                                }} 
                                type="text"
                                value={newMovie.title} 
                                onChange={(event) => handleChange('title', event)} 
                                variant="outlined" />
                        </FormControl>
                    </div>  
                    <div>    
                        <FormControl variant="outlined">
                            <TextField  
                                id="standard-full-width"
                                label="movie url" 
                                style={{ margin: 8 }}
                                margin="normal"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                type="text"
                                value={newMovie.poster} 
                                onChange={(event) => handleChange('poster', event)} 
                                variant="outlined" />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="outlined">
                            <TextField 
                                id="standard-full-width"
                                label="description" 
                                style={{ margin: 8 }}
                                margin="normal"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                type="text" 
                                variant="outlined"
                                value={newMovie.description}
                                onChange={(event) => handleChange('description', event)} />
                        </FormControl>
                    </div>   
                    <div>   
                        <InputLabel htmlFor="component-outlined">Genre</InputLabel>
                            <Select
                                variant="outlined"
                                
                                label="Genre"
                            >
                                <option aria-label="None" value="" />
                                <option value={'Adventure'}>Adventure</option>
                                <option value={'Animated'}>Animated</option>
                                <option value={'Biographical'}>Biographical</option>
                                <option value={'Comedy'}>Comedy</option>
                                <option value={'Disaster'}>Disaster</option>
                                <option value={'Drama'}>Drama</option>
                                <option value={'Epic'}>Epic</option>
                                <option value={'Fantasy'}>Fantasy</option>
                                <option value={'Musical'}>Musical</option>
                                <option value={'Romantic'}>Romantic</option>
                                <option value={'Science Fiction'}>Science Fiction</option>
                                <option value={'Space-Opera'}>Space-Opera</option>
                                <option value={'Superhero'}>Superhero</option>
                            </Select>
                    </div>           
                                                            
                    <div>   
                        {/* <ButtonGroup orientation="vertical"> */}
                        <div>
                            <IconButton 
                                aria-label="delete"
                                variant="contained"
                                // startIcon={<DeleteIcon />}
                                onClick={handleClickOpen}>
                                <DeleteIcon />
                            </IconButton>
                            <Dialog
                                fullScreen={fullScreen}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="dialog-test"
                            >
                                <DialogTitle id="dialog-test">{"Was it something I said?"}</DialogTitle>
                                <DialogContent>
                                <DialogContentText>
                                    Are you sure you don't want to add a movie. I mean, it's not going anywhere, because this is just a shell
                                    of an app that's being used to test dialogs. Well, I suppose, now that I've said that, you may as well clicked
                                    the button and leave.
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button autoFocus onClick={sendHome} color="primary">
                                    Fine, Leave Already
                                </Button>
                                
                                </DialogActions>
                            </Dialog>
                        </div>
                        <div>
                            <IconButton 
                                aria-label="save"
                                variant="contained"
                                // endIcon={<SaveIcon />}
                                onClick={handleClickOpen}>
                                <SaveIcon />
                            </IconButton>
                            <Dialog
                                fullScreen={fullScreen}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="dialog-test"
                            >
                                <DialogTitle id="dialog-test">{"I'm sorry Dave, I can't let you do that"}</DialogTitle>
                                <DialogContent>
                                <DialogContentText>
                                    Yeah, we're not really equipted to save a title per se. That was the other movie app. This one is
                                    just being used to test dialogs. So, click the button and look at the pre-installed movie titles
                                    in their nice accordion containers. Those will definitely look better in the next app.
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button autoFocus onClick={sendHome} color="primary">
                                    Fine, Leave Already
                                </Button>
                                
                                </DialogActions>
                            </Dialog>
                        </div>
                        {/* </ButtonGroup> */}
                    </div> 
                </form>
            </div>
            
        </div>

    )

}; //end AddMovie

export default AddEntry;