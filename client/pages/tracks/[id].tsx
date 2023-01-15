import { Button, Grid, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import styles from '../../styles/TrackPage.module.scss'
import React from 'react'
import { ITrack } from '../../types/Tracks'

const TracksPage = () => {
    const router = useRouter()
    const tracks: ITrack = [
        { _id: 0, name: 'Track 1', artist: 'No one 1', text: 'Some text', listens: 5, audio: '', picture: '', comments: [] },
        { _id: 0, name: 'Track 2', artist: 'No one 2', text: 'Some text', listens: 5, audio: '', picture: '', comments: [] },
        { _id: 0, name: 'Track 3', artist: 'No one 3', text: 'Some text', listens: 5, audio: '', picture: '', comments: [] }
    ]

    return (
        <div>
            <Button
                variant='outlined'
                onClick={() => router.push('/tracks')}
                className={styles.trackPage__btn}
            >
                Back
            </Button>
            <Grid container className={styles.trackPage__info}>
                <img src={tracks.picture} alt="" className={styles.trackPage__img} />
                <div className={styles.trackPage__words}>
                    <h1>Track name - {tracks.name}</h1>
                    <h2>Artist - {tracks.artist}</h2>
                    <h3>Listens - {tracks.listens}</h3>
                </div>
            </Grid>
            <h1>Articles to track</h1>
            <p>{tracks.text}</p>
            <h1>Comments</h1>
            <Grid container>
                <TextField
                    label={'Your Name'}
                    fullWidth />
                <TextField
                    label={'Leave Comment...'}
                    fullWidth
                    multiline
                    rows={4} />
                <Button variant='outlined'>Send</Button>
            </Grid>
            {/* <div>
                {tracks.comments.map((obj) => (
                    <div>
                        <div>{obj.username}</div>
                        <div>{obj.text}</div>
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default TracksPage