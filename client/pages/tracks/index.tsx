import { Button, Card, Grid } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'
import TrackList from '../../components/TrackList'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { NextThunkDispatch, wrapper } from '../../store'
import { fetchTracks } from '../../store/action-creators/track'
import { ITrack } from '../../types/Tracks'

const Tracks: React.FC = () => {
    const router = useRouter()
    const { tracks, error } = useTypedSelector((state) => state.track)

    if (error) {
        return <Grid container justifyContent={'center'}>
            <h1>Something is wrong...</h1>
        </Grid>
    }

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

export const getServerSideProps =
    wrapper.getServerSideProps(async ({ store }) => {

        const dispatch = store.dispatch as NextThunkDispatch
        await dispatch(await fetchTracks())

    })