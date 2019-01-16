import React, { Component } from 'react';
import NavBar from '../../components/Nav/NavBar'
import { withStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout/Layout'
import Score from '../../components/Score/Score'
import { Modal, CardActionArea, CardMedia, Card, Grid, Paper, CardContent, Typography, CardActions, Button, TableCell } from '@material-ui/core';
import ecgImg from '../../assets/ECG.png';
import DatahubPanel from '../../components/DatahubPanel/DatahubPanel'
import Todolist from '../../components/Todolist/Todolist';
import scoreImg from '../../assets/score.png';
import surveyCoverImg from '../../assets/survey_cover.jpeg';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {

    },

    container: {
        overflow: 'hidden',
        margin: `${theme.spacing.unit * 2}px 0`,
        padding: `${theme.spacing.unit}px`
    },

    modalCard: {
        position: 'absolute',
        // width: theme.spacing.unit * 50,
        width: "70%",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 4,
      },

});


class Datahub extends Component {
    state = {
        open: false,
    };

    rand = () => {
        return Math.round(Math.random() * 20) - 10;
    }

    getModalStyle = () => {
        const top = 25
        const left = 7.5
      
        return {
          top: `${top}%`,
          left: `${left}%`,
        //   transform: `translate(-${top}%, -${left}%)`,
        };
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Layout title="Data Hub">
                    <div className={classes.root}>
    
                        <Grid container className={classes.container} justify="center">
                            <Grid item xs={12}>
                            <Grid container>
                            </Grid>
                                <DatahubPanel clickButton={this.handleOpen} />
                            </Grid>
                        </Grid>
                    </div>
                </Layout>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Datahub);