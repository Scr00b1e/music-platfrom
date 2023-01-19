import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import React from 'react'
import styles from '../styles/Player.module.scss'
import TrackProgress from './TrackProgress'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import { setDurationTrack } from '../store/action-creators/player'
import { Grid, IconButton } from '@mui/material'

let audio: HTMLAudioElement

const Player: React.FC = () => {
    const { pause, volume, currentTime, active, duration } = useTypedSelector((state) => state.player)
    const { pauseTrack, playTrack, setVolumeTrack, setCurrentTimeTrack } = useActions()

    const play = () => {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolumeTrack(Number(e.target.value))
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value)
        setCurrentTimeTrack(Number(e.target.value))
    }

    const setAudio = () => {
        if (active) {
            audio.src = active.audio
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                setDurationTrack(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
                setDurationTrack(Math.ceil(audio.currentTime))
            }
        }
    }

    if (!audio) {
        return null
    }

    React.useEffect(() => {
        if (!audio) {
            audio = new Audio()
        } else {
            setAudio()
            play()
        }
    }, [])

    return (
        <div className={styles.player}>
            <div className={styles.player__play}>
                <IconButton onClick={play}>
                    {
                        !pause ? <Pause /> : <PlayArrow />
                    }
                </IconButton>
                <Grid container direction='column' className={styles.player__item}>
                    <h3>{active?.name}</h3>
                    <p>{active?.artist}</p>
                </Grid>
                <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
            </div>
            <VolumeUp />
            <TrackProgress left={0} right={100} onChange={changeVolume} />
        </div>
    )
}

export default Player