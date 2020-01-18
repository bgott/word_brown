import React from 'react'
import Card from '@material-ui/core/Card';
import UserIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import PinIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';

const ContactCard = () => (
    <>
        <div className="contact-section">
            <h3>Group Information</h3>
            <Card elevation="4" className="card">
                <div className="row">
                    <div className="contact-field">
                        <div className="icon">
                            <UserIcon style={{fontSize:42}}/>
                        </div>
                        <div className="data">
                            <div className="contact-field-title">
                                Contact Person
                            </div>
                            <div className="contact-field-value">
                                Dinesh Chugtai
                            </div>
                        </div>
                    </div>
                    <div className="contact-field">
                        <div className="icon">
                            <PhoneIcon style={{fontSize:35}}/>
                        </div>
                        <div className="data">
                            <div className="contact-field-title">
                                Phone
                            </div>
                            <div className="contact-field-value">
                                (213) 555-1145
                            </div>
                        </div>
                    </div>
                    <div className="contact-field">
                        <div className="icon">
                            <EmailIcon style={{fontSize:30}}/>
                        </div>
                        <div className="data">
                            <div className="contact-field-title">
                                Email
                            </div>
                            <div className="contact-field-value">
                                DChugtai@piedpiper.com
                            </div>
                        </div>
                    </div>
                    <div className="contact-field">
                        <div className="icon">
                            <PinIcon style={{fontSize:35}}/>
                        </div>
                        <div className="data">
                            <div className="contact-field-title">
                                Zip Code
                            </div>
                            <div className="contact-field-value">
                                92612
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </>
)

export default ContactCard
