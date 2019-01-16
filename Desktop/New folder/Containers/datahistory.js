import React, { Component } from 'react';
import NavBar from '../../components/Nav/NavBar'
import { withStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout/Layout'
import Score from '../../components/Score/Score'
import { Modal, CardActionArea, CardMedia, Card, Grid, Paper, CardContent, Typography, CardActions, Button, TableCell } from '@material-ui/core';
import ecgImg from '../../assets/ECG.png';
import Todolist from '../../components/Todolist/Todolist';
import scoreImg from '../../assets/score.png';
import surveyCoverImg from '../../assets/survey_cover.jpeg';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import axios from '../../axios-orders';

const styles = theme => ({
    root: {

    },

    container: {
        overflow: 'hidden',
        margin: `${theme.spacing.unit}px 0`,
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


class DataHistory extends Component {
    state = {
        bt: 0,
        upper: 0,
        lower: 0
    };

    componentDidMount() {
        axios.get("/thresholds/1")
        .then(res => {
            const new_bt = Number(res.data.bt);
            const new_upper = Number(res.data.upper);
            const new_lower = Number(res.data.lower)

            this.setState({
                bt: new_bt,
                upper: new_upper,
                lower: new_lower
            })
        });

    }

    render() {
        const { classes } = this.props;
        const btdata = {
            labels: ['11/20', '11/21', '11/22', '11/23', '11/24', '11/25', '11/26'],
            datasets: [
              {
                label: 'Body Temperature',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#ab003c',
                borderColor: '#ab003c',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [99.2, 98.9, 99, 98.6, 97.8, 98.7, 98.6]
              },

              {
                label: 'Max',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [5, 5],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [this.state.bt, this.state.bt, this.state.bt, this.state.bt, this.state.bt, this.state.bt, this.state.bt]
              }
            ]
          };

          const bpdata = {
            labels: ['11/20', '11/21', '11/22', '11/23', '11/24', '11/25', '11/26'],
            datasets: [
              {
                label: 'SBP',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#ab003c',
                borderColor: '#ab003c',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#ab003c',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#ab003c',
                pointHoverBorderColor: '#ab003c',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [115, 113, 117, 119, 125, 118, 113]
              },

              {
                label: 'SBP Max',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [5, 5],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [this.state.upper, this.state.upper, this.state.upper, this.state.upper, this.state.upper, this.state.upper, this.state.upper]
              },

              {
                label: 'DBP',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#2a3eb1',
                borderColor: '#2a3eb1',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#2a3eb1',
                pointHoverBorderColor: '#2a3eb1',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [77, 85, 78, 79, 76, 76, 77]
              },

              {
                label: 'DBP Max',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [5, 5],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [this.state.lower, this.state.lower, this.state.lower, this.state.lower, this.state.lower, this.state.lower, this.state.lower]
              }


            ]
          };

          
        return (
            <React.Fragment>
                <Layout title="Data History">
                    <div className={classes.root}>
    
                        <Grid container className={classes.container} justify="center">
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom align="left">
                                    Body Temperature
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Line data={btdata} options={{
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                min: 95,
                                                max: 110,
                                              
                                            }
                                        }]
                                    },
                                    legend: { display: false }
                                }} />
                            </Grid>

                        </Grid>
                        <Grid container className={classes.container} justify="center">
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom align="left">
                                    Blood Pressure
                                </Typography>
                            </Grid>
                            <Grid item xs={12} style={{height: "300px"}}>
                                <Line data={bpdata} options={{
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                min: 70,
                                                max: 130,
                          
                                            }
                                        }]
                                    },
                                    legend: { display: false },
                                    responsive: true,
                                    maintainAspectRatio: false,
                                }} />
                            </Grid>
                        </Grid>


                    </div>
                </Layout>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(DataHistory);