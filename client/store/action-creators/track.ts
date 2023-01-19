import axios from "axios"
import { Dispatch } from "react"
import { TrackAction, TrackActionTypes } from "../../types/Tracks"

export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const responce = axios.get('http://localhost:5000/tracks')
            dispatch({
                type: TrackActionTypes.FETCH_TRECKS,
                payload: (await responce).data
            })
        } catch {
            dispatch({
                type: TrackActionTypes.FETCH_TRECKS_ERROR,
                payload: "Something is wrong"
            })
        }
    }
}