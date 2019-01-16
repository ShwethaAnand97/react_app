import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout/Layout'
import { InputAdornment, Input, Card, Grid, CardContent, Typography } from '@material-ui/core';
import bloodPressureImg from '../../assets/blood_pressure.png';
import bloodPressureRangeImg from '../../assets/blood_pressure_range.png';
import axios from '../../axios-orders';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {

    },

    container: {
        overflow: 'hidden',
        margin: `${theme.spacing.unit * 2}px 0`,
        padding: `${theme.spacing.unit}px`
    }

});


class ChangeDate extends Component {

    state = {
    }

    updateInputValue(event) {
        const new_value = event.target.value;
        console.log(new_value)

        let myDate = new_value.split("-");
        let newDate = myDate[1] + "," + myDate[2] + "," + myDate[0];
        // alert(new Date(newDate));​
        let new_timestamp = new Date(newDate).getTime();

        axios.patch("/users/1", {
            "dateOfSurgery": new_timestamp,
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Layout title="Change Date of Surgery">
                    <div className={classes.root}>
                        <Grid container className={classes.container} justify="center">
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom align="center">
                                    Demo Page
                                </Typography>
                                <TextField
                                    id="date"
                                    type="date"
                                    defaultValue="2018-11-16"
                                    onChange={event => this.updateInputValue(event)}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Layout>
            </React.Fragment>
        )
    }
  
}

export default withStyles(styles)(ChangeDate);