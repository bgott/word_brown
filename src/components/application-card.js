import React from 'react'
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Divider from '@material-ui/core/Divider';

const steps_status = ["BRP Status", "BR Status", "ERP Status", "ER Status", "UWP Status", "UW Status"];
const steps_dates = ["10/28/2019", "11/10/2019", "11/12/2019", "IN PROGRESS", "", ""]
const step_data = ["Broker application has been completed and Employer registration email is being prepared",
"Broker setup complete. Employer working on Master Application",
"Master Application complete, send to employees to enroll",
"Master Application complete. Employee enrolling",
"Master Application and Employee Application finalized for submission to Underwriting",
"Master Application and Employee Application finalized"];

const ApplicationCard = () => (
    <>
        <div className="application-card">
            <div className="application-heaer">
                <div className="header-title">
                    <h4>Application</h4>
                    <Chip label="ER Status" size="small" className="chip"/>
                </div>
                <div className="header-actions">
                    <FormControl variant="outlined">
                        <Select value="Actions" className="type-select">
                            <MenuItem value="Actions">Actions</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <Card elevation="4" className="app-card">
                <div className="card-header">
                    <div className="header-left">
                        <div className="date-effective">Effective Date: 01/01/2020</div>
                        <div className="date-due">Due Date: 01/08/2020</div>
                    </div>
                    <div className="header-right">
                        <Card elevation="0" className="paper">
                            <div className="days-left-data">14</div>
                        </Card>
                        <div className="days-left-label">Days Left</div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="app-status-container">
                        <div className="progress-bar">
                            <Divider orientation="vertical" className="progress-stepper progress-stepper-dark"/>
                            <Divider orientation="vertical" className="progress-stepper progress-stepper-light"/>
                        </div>
                        <div className="stepper-data">
                            <Stepper orientation="vertical" connector={false}>
                                <Step active>
                                    <StepLabel>
                                        <div className="step-label">
                                            <div className="step-status">{steps_status[0]}</div>
                                            <div className="step-date">{steps_dates[0]}</div>
                                        </div>
                                        <div className="step-content">{step_data[0]}</div>
                                        <Divider className="step-divider"/>
                                    </StepLabel>
                                </Step>
                                <Step active>
                                    <StepLabel>
                                        <div className="step-label">
                                            <div className="step-status">{steps_status[1]}</div>
                                            <div className="step-date">{steps_dates[1]}</div>
                                        </div>
                                        <div className="step-content">{step_data[1]}</div>
                                        <Divider className="step-divider"/>
                                    </StepLabel>
                                </Step>
                                <Step active>
                                    <StepLabel>
                                        <div className="step-label">
                                            <div className="step-status">{steps_status[2]}</div>
                                            <div className="step-date">{steps_dates[2]}</div>
                                        </div>
                                        <div className="step-content">{step_data[2]}</div>
                                        <Divider className="step-divider"/>
                                    </StepLabel>
                                </Step>
                                <Step active>
                                    <StepLabel>
                                        <div className="step-label">
                                            <div className="step-status">{steps_status[3]}</div>
                                            <div className="step-date">{steps_dates[3]}</div>
                                        </div>
                                        <div className="step-content">{step_data[3]}</div>
                                        <Divider className="step-divider"/>
                                    </StepLabel>
                                </Step>
                                <Step active>
                                    <StepLabel>
                                        <div className="step-label">
                                            <div className="step-status">{steps_status[4]}</div>
                                            <div className="step-date">{steps_dates[4]}</div>
                                        </div>
                                        <div className="step-content">{step_data[4]}</div>
                                        <Divider className="step-divider"/>
                                    </StepLabel>
                                </Step>
                                <Step active>
                                    <StepLabel>
                                        <div className="step-label">
                                            <div className="step-status">{steps_status[5]}</div>
                                            <div className="step-date">{steps_dates[5]}</div>
                                        </div>
                                        <div className="step-content">{step_data[5]}</div>
                                    </StepLabel>
                                </Step>
                            </Stepper>
                        </div>
                    </div>
                    <div className="button-container">
                        <Button
                            variant="contained"
                            disableElevation fullWidth="true"
                            color="rebeccapurple">
                            Finalize Enrollment
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    </>
)

export default ApplicationCard
