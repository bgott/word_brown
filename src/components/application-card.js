import React from 'react'
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';

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
