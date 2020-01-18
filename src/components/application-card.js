import React from 'react'
import Card from '@material-ui/core/Card';
//import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     card: {
//         minWidth:500;
//         minHeight:500;
//     },
// })

const ApplicationCard = () => (
    <>
        <div className="application-card">
            <h3>Application</h3>
            <Card elevation="4" className="app-card">
                <div className="pee">
                </div>
            </Card>
        </div>
    </>
)

export default ApplicationCard
