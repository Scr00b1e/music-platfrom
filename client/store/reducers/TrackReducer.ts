import { TrackAction, TrackActionTypes, TrackState } from "../../types/Tracks"

const initialState: TrackState = {
    tracks: [],
    error: ''
}

export const trackReducer = (action: TrackAction, state = initialState): TrackState => {

    switch (action.type) {
        case TrackActionTypes.FETCH_TRECKS_ERROR:
            return { ...state, error: action.payload }
        case TrackActionTypes.FETCH_TRECKS:
            return { error: '', tracks: action.payload }
        default:
            return state
    }

}