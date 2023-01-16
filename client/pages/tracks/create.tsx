import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import FileUpload from '../../components/FileUpload'
import StepWrapper from '../../components/StepWrapper'

const Create: React.FC = () => {
    const [activeStep, setActiveStep] = React.useState(0)
    const [picture, setPicture] = React.useState(null)
    const [audio, setAudio] = React.useState(null)

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
                    <FileUpload setFile={setPicture} accept='image/*' >
                        <Button>Upload Cover</Button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload setFile={setAudio} accept='audio/*' >
                        <Button>Upload Track</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent={'space-between'}>
                <Button disabled={activeStep === 0} onClick={Back}>Back</Button>
                <Button onClick={Next}>Next</Button>
            </Grid>
        </>
    )
}

export default Create