import { Card, Grid, IconButton } from '@mui/material'
import React from 'react'
import { ITrack } from '../types/Tracks'
import styles from '../styles/TrackItem.module.scss'
import { Delete, Pause, PlayArrow } from '@mui/icons-material'
import { useRouter } from 'next/router'

interface TrackItemProps {
    track: ITrack
    active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
    const router = useRouter()

    return (
        <Card className={styles.track}
            onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={(e) => e.stopPropagation()}>
                {
                    active ? <Pause /> : <PlayArrow />
                }
            </IconButton>
            <img src={track.picture} alt="" className={styles.track__img} />
            <Grid container direction='column' className={styles.track__item}>
                <h3>{track.name}</h3>
                <p>{track.artist}</p>
            </Grid>
            {active && <div>34:3 / 23:3</div>}
            <IconButton className={styles.track__delete} onClick={(e) => e.stopPropagation()}>
                <Delete />
            </IconButton>
        </Card>
    )
}

export default TrackItem