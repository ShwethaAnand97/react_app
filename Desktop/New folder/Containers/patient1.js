import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout/Layout'
import { InputAdornment, Input, Card, Grid, CardContent, Typography } from '@material-ui/core';
import bodyTempImg from '../../assets/body_temp.png';
import bodyTempRangeImg from '../../assets/body_temp_range.png';

const styles = theme => ({
    root: {

    },

    container: {
        overflow: 'hidden',
        margin: `${theme.spacing.unit * 2}px 0`,
        padding: `${theme.spacing.unit}px`
    }

});


const Report1 = (props) => {
    const { classes } = props;

    return (
        <React.Fragment>
            <Layout title="Self Report" next="/report2">
                <div className={classes.root}>
                    <Grid container className={classes.container} justify="center">
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom align="center">
                                Please enter Alice's body temperature today.
                            </Typography>
                            <Input
                                endAdornment={<InputAdornment position="end">ºF</InputAdornment>}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.container} justify="center">
                        <Grid item xs={12}>
                            <Card className={classes.modalCard}>
                                <CardContent>
                                    <Grid container justify="center">
                                        <Grid item xs={12} >
                                            <Typography variant="h6" align="left">
                                                How to Correctly Measure It
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="center">
                                        <Grid item xs={12} >
                                            <img src={bodyTempImg} style={{width: "100%"}}/>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.container} justify="center">
                        <Grid item xs={12}>
                            <Card className={classes.modalCard}>
                                <CardContent>
                                    <Grid container justify="center">
                                        <Grid item xs={12} >
                                            <Typography variant="h6" align="left">
                                                Why It Is Important
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="center">
                                        <Grid item xs={12} >
                                        <Typography variant="body1" style={{color: "#777777"}} align="left">
                                                <p>
                                                Rise in body temperature is the first symptom of body fighting an infection. Thus it is necessary to measure it everyday post surgery to know if there is an underlying infection in the body.
                                                </p>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.container} justify="center">
                        <Grid item xs={12}>
                            <Card className={classes.modalCard}>
                                <CardContent>
                                    <Grid container justify="center">
                                        <Grid item xs={12} >
                                            <Typography variant="h6" align="left">
                                                Normal Range
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="center">
                                        <Grid item xs={12} >
                                            <Typography variant="body1" align="left">
                                                
                                            </Typography>
                                            <img src={bodyTempRangeImg} style={{width: "100%"}}/>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </Layout>
        </React.Fragment>
    )
}
export default withStyles(styles)(Report1);