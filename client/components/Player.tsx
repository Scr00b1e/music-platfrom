import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton/IconButton'
import React from 'react'
import styles from '../styles/Player.module.scss'
import { ITrack } from '../types/Tracks'
import Grid from '@mui/material/Grid/Grid'
import TrackProgress from './TrackProgress'

const Player: React.FC = () => {
    const active = false
    const tracks: ITrack = { _id: '0', name: 'Track 1', artist: 'No one 1', text: 'Some text', listens: 5, audio: '', picture: '', comments: [] }


    return (
        <div className={styles.player}>
            <div className={styles.player__play}>
                <IconButton onClick={(e) => e.stopPropagation()}>
                    {
                        active ? <Pause /> : <PlayArrow />
                    }
                </IconButton>
                <Grid container direction='column' className={styles.player__item}>
                    <h3>{tracks.name}</h3>
                    <p>{tracks.artist}</p>
                </Grid>
                <TrackProgress left={0} right={100} onChange={() => ({})} />
            </div>
            <VolumeUp />
            <TrackProgress left={0} right={100} onChange={() => ({})} />
        </div>
    )
}

export default Player