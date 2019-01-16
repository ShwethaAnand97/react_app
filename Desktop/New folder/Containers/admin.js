import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout/Layout'
import { InputAdornment, Input, Card, Grid, CardContent, Typography } from '@material-ui/core';
import bloodPressureImg from '../../assets/blood_pressure.png';
import bloodPressureRangeImg from '../../assets/blood_pressure_range.png';
import axios from '../../axios-orders';
import TextField from '@material-ui/core/TextField';
import purple from '@material-ui/core/colors/purple';
import ReactTimeout from 'react-timeout'
import Notification  from 'react-web-notification';

const styles = theme => ({
    root: {

    },

    container: {
        overflow: 'hidden',
        margin: `${theme.spacing.unit * 2}px 0`,
        padding: `${theme.spacing.unit}px`
    }

});


class Admin extends Component {

    constructor(props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.checkStatus = this.checkStatus.bind(this);
    }
      
    state = {
        upper: 0,
        lower: 0,
        bt: 0,
        ignore: true,
        title: ''
    }

    handlePermissionGranted(){
        console.log('Permission Granted');
        this.setState({
          ignore: false
        });
      }
      handlePermissionDenied(){
        console.log('Permission Denied');
        this.setState({
          ignore: true
        });
      }
      handleNotSupported(){
        console.log('Web Notification not Supported');
        this.setState({
          ignore: true
        });
      }
    
      handleNotificationOnClick(e, tag){
        console.log(e, 'Notification clicked tag:' + tag);
      }
    
      handleNotificationOnError(e, tag){
        console.log(e, 'Notification error tag:' + tag);
      }
    
      handleNotificationOnClose(e, tag){
        console.log(e, 'Notification closed tag:' + tag);
      }
    
      handleNotificationOnShow(e, tag){
        // this.playSound();
        console.log(e, 'Notification shown tag:' + tag);
      }
    
    //   playSound(filename){
    //     document.getElementById('sound').play();
    //   }
    
      handleButtonClick() {
    
        if(this.state.ignore) {
          return;
        }
    
        const now = Date.now();
    
        const title = 'Patient Warning';
        const body = "Alice's blood pressure is abnormal!";
        const tag = now;
        const icon = 'http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png';
        // const icon = 'http://localhost:3000/Notifications_button_24.png';
    
        // Available options
        // See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
        const options = {
        //   tag: tag,
          body: body,
          icon: icon,
          lang: 'en',
          dir: 'ltr',
        //   sound: './sound.mp3'  // no browsers supported https://developer.mozilla.org/en/docs/Web/API/notification/sound#Browser_compatibility
        }
        this.setState({
          title: title,
          options: options
        });
      }
    

    componentDidMount() {
        this.props.setInterval(this.checkStatus, 1000);

        axios.get("/thresholds/1")
        .then(res => {
            const new_upper = Number(res.data.upper);
            const new_lower = Number(res.data.lower);
            const new_bt = Number(res.data.bt);

            this.setState({
                upper: new_upper,
                lower: new_lower,
                bt: new_bt
            })
        });

    }

    checkStatus() {
        axios.get("/thresholds/1")
        .then(res => {
            const new_upper = Number(res.data.upper);
            const new_lower = Number(res.data.lower);

            axios.get("/metrics/1")
            .then(res => {
                if (Number(res.data.bp_upper) > new_upper || Number(res.data.bp_lower) > new_lower) {
                    console.log("danger");
                    this.handleButtonClick();
                }
            }

        )
        });
    }

    updateUpperValue(event) {
        const new_upper = event.target.value;

        this.setState({
            upper: new_upper
        })

        axios.patch("/thresholds/1", {
            "upper": new_upper,
        })
    }

    updateLowerValue(event) {
        const new_lower = event.target.value;

        this.setState({
            lower: new_lower
        })


        axios.patch("/thresholds/1", {
            "lower": new_lower,
        })
    }

    updateBTValue(event) {
        const new_bt = event.target.value;

        this.setState({
            bt: new_bt
        })


        axios.patch("/thresholds/1", {
            "bt": new_bt,
        })
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
                <Layout title="Threshold Settings" admin="1">
                    <div className={classes.root}>
                        <Grid container className={classes.container} justify="center">
                            <Grid item xs={6} >
                                <Typography variant="h6" align="left">
                                    Doctor: Jack
                                </Typography>
                            </Grid>
                            <Grid item xs={6} >
                                <Typography variant="h6" align="right">
                                    Patient: Alice
                                </Typography>
                            </Grid>
                        </Grid>


                        <Grid container className={classes.container} justify="center">
                            <Grid item xs={12}>

                                <TextField
                                    id="standard-full-width"
                                    label="SBP Threshold"
                                    style={{ margin: 8 }}
                                    placeholder="mmHg"
                                    margin="normal"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={event => this.updateUpperValue(event)}
                                    value={this.state.upper}
                                />

                                <TextField
                                    id="standard-full-width"
                                    label="DBP Threshold"
                                    style={{ margin: 8 }}
                                    placeholder="mmHg"
                                    margin="normal"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={event => this.updateLowerValue(event)}
                                    value={this.state.lower}
                                />

                                <TextField
                                    id="standard-full-width"
                                    label="Body Temperature Threshold"
                                    style={{ margin: 8 }}
                                    placeholder="ºF"
                                    margin="normal"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={event => this.updateBTValue(event)}
                                    value={this.state.bt}
                                />

                            </Grid>
                        </Grid>

                        <Grid container className={classes.container} justify="center">
                            <Grid item xs={12}>
                                    
                            <TextField
                                id="standard-full-width"
                                type="date"
                                style={{ margin: 8 }}
                                margin="normal"
                                fullWidth
                                label="Date of Surgery"
                                defaultValue="2018-11-16"
                                onChange={event => this.updateInputValue(event)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            </Grid>


                        </Grid>
                    </div>

                    <Notification
                        ignore={this.state.ignore && this.state.title !== ''}
                        notSupported={this.handleNotSupported.bind(this)}
                        onPermissionGranted={this.handlePermissionGranted.bind(this)}
                        onPermissionDenied={this.handlePermissionDenied.bind(this)}
                        onShow={this.handleNotificationOnShow.bind(this)}
                        onClick={this.handleNotificationOnClick.bind(this)}
                        onClose={this.handleNotificationOnClose.bind(this)}
                        onError={this.handleNotificationOnError.bind(this)}
                        timeout={5000}
                        title={this.state.title}
                        options={this.state.options}
                    />
                </Layout>
            </React.Fragment>
        )
    }
  
}

export default ReactTimeout(withStyles(styles)(Admin));