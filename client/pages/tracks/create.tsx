import { FileUpload } from '@mui/icons-material'
import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import StepWrapper from '../../components/StepWrapper'

const Create: React.FC = () => {
    const [activeStep, setActiveStep] = React.useState(0)

    const Next = () => {
        if (activeStep !== 2) {
            setActiveStep((prev) => prev + 1)
        }
    }

    const Back = () => {
        setActiveStep((prev) => prev - 1)
    }

    return (
        <>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction={'column'} padding='20px'>
                        <h1>About Track</h1>
                        <TextField label={'Track name'} style={{ marginTop: 10 }} />
                        <TextField label={'Author name'} style={{ marginTop: 10 }} />
                        <TextField label={'About track'}
                            multiline rows={3} style={{ marginTop: 10 }} />
                    </Grid>
                }
                {activeStep === 1 &&
                    <FileUpload file={''} setFile={() => ({})} />
                }
                {activeStep === 2 &&
                    <h1>Track uploading</h1>}
            </StepWrapper>
            <Grid container justifyContent={'space-between'}>
                <Button disabled={activeStep === 0} onClick={Back}>Back</Button>
                <Button onClick={Next}>Next</Button>
            </Grid>
        </>
    )
}

export default Create