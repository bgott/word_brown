import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import UserIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import PinIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';

const ContactCard = () => (
    <>
        <div className="contact-section">
            <h4>Group Information</h4>
            <Card elevation="4" className="card">
                <div className="row">
                    <Grid container spacing="3" direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            <div className="contact-field">
                                <div className="icon">
                                    <UserIcon style={{fontSize:42}}/>
                                </div>
                                <div className="data">
                                    <div className="contact-field-title">Contact Person</div>
                                    <div className="contact-field-value">Dinesh Chugtai</div>
                                </div>
                            </div>
                        </Grid>
                        <Divider orientation="vertical" />
                        <Grid item>
                            <div className="contact-field">
                                <div className="icon">
                                    <PhoneIcon style={{fontSize:35}}/>
                                </div>
                                <div className="data">
                                    <div className="contact-field-title">Phone</div>
                                    <div className="contact-field-value">(213) 555-1145</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className="contact-field">
                                <div className="icon">
                                    <EmailIcon style={{fontSize:30}}/>
                                </div>
                                <div className="data">
                                    <div className="contact-field-title">Email</div>
                                    <div className="contact-field-value">DChugtai@piedpiper.com</div>
                                </div>
                            </div>
                        </Grid>
                        <Divider orientation="vertical" />
                        <Grid item>
                            <div className="contact-field">
                                <div className="icon">
                                    <PinIcon style={{fontSize:35}}/>
                                </div>
                                <div className="data">
                                    <div className="contact-field-title">Zip Code</div>
                                    <div className="contact-field-value">92612</div>
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                </div>
                <div className="row">
                    <Grid container spacing="3" direction="row" justify="flex-start" alignItems="center">
                        <Grid item className="tax-section">
                            <div className="tax-id-title">Tax ID:</div>
                            <div className="tax-id-data">20-5889409</div>
                        </Grid>
                    </Grid>
                </div>
            </Card>
        </div>
    </>
)

export default ContactCard
