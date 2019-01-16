import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout/Layout'
import Score from '../../components/Score/Score'
import { Modal, CardActionArea, CardMedia, Card, Grid, Paper, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import surveyCoverImg from '../../assets/survey_cover.jpeg';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {

    },

    container: {
        overflow: 'hidden',
        margin: `${theme.spacing.unit * 2}px 0`,
        padding: `${theme.spacing.unit}px`
    }

});


const BeginSurvey = (props) => {
    const { classes } = props;

    return (
        <React.Fragment>
            <Layout title="Self Report">
                <div className={classes.root}>
   
                <Grid container>
                    <Grid item xs={12} justify="center">
                        <Card >
                            <CardContent>
                                <Grid container justify="center">
                                    <Grid item xs={8} >
                                        <img src={surveyCoverImg} style={{width: "100%"}} />
                                    </Grid>
                                </Grid>
                                <Grid container justify="center">
                                    <Grid item xs={12} >
                                        <Typography variant="body1" align="center">
                                            Do you feel the same as yesterday?
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </CardContent>
                            <CardActions>
                                <Grid container justify="center">
                                    <Grid item xs={12} >
                                        <Button size="small" color="primary">
                                        Yes
                                        </Button>
                                        <Link to="/report1" style={{textDecoration: 'none'}}>
                                            <Button size="small" color="primary">
                                            No
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>

                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default withStyles(styles)(BeginSurvey);