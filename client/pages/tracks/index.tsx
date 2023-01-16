import { Button, Card, Grid } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'
import TrackList from '../../components/TrackList'
import { ITrack } from '../../types/Tracks'

const Tracks: React.FC = () => {
    const router = useRouter()
    const tracks: ITrack = [
        { _id: '0', name: 'Track 1', artist: 'No one 1', text: 'Some text', listens: 5, audio: '', picture: '', comments: [] },
        { _id: '1', name: 'Track 2', artist: 'No one 2', text: 'Some text', listens: 5, audio: '', picture: '', comments: [] },
        { _id: '2', name: 'Track 3', artist: 'No one 3', text: 'Some text', listens: 5, audio: '', picture: '', comments: [] }
    ]

    return (
        <Grid container justifyContent={'center'}>
            <Card sx={{ width: 900 }}>
                <Box p={2}>
                    <Grid container justifyContent={'space-between'}>
                        <h1>Tracks list</h1>
                        <Button onClick={() => router.push('/tracks/create')}>Upload</Button>
                    </Grid>
                </Box>
                <TrackList tracks={tracks} />
            </Card>
        </Grid>
    )
}

export default Tracks