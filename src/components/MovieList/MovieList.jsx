import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './MovieList.css'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '75%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

function MovieList() {

    const classes = useStyles();

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1 className="sectionHeader">MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} className={classes.root}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                    <Typography className={classes.heading}>{movie.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                    <img src={movie.poster} alt={movie.title}/>
                                    </div>
                                    <Typography>{movie.description}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;