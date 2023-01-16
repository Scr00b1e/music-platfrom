import { Card, Grid, Step, StepLabel } from '@mui/material'
import Stepper from '@mui/material/Stepper/Stepper'
import { Box } from '@mui/system'
import React from 'react'

interface StepWrapperType {
    activeStep: number
    children: any
}

const steps = ['About track', 'Upload Image', 'Upload track']

const StepWrapper: React.FC<StepWrapperType> = ({ activeStep, children }) => {
    return (
        <Box>
            <Stepper activeStep={activeStep}>
                {
                    steps.map((step, i) => (
                        <Step key={i} completed={activeStep > i}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
            <Grid container justifyContent='center' margin={'70px 0'} height='300px'>
                <Card style={{ width: 600 }}>
                    {children}
                </Card>
            </Grid>
        </Box>
    )
}

export default StepWrapper