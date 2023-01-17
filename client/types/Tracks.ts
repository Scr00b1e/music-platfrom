export interface IComment {
    _id: string
    username: string
    text: string
}

export interface ITrack {
    _id: string
    name: string
    artist: string
    text: string
    listens: number
    picture: string
    audio: string
    comments: IComment[]
}

export interface TrackState {
    tracks: ITrack[]
    error: string
}

export enum TrackActionTypes {
    FETCH_TRECKS = "FETCH_TRECKS",
    FETCH_TRECKS_ERROR = "FETCH_TRECKS_ERROR"
}

interface FetchTrecksAction {
    type: TrackActionTypes.FETCH_TRECKS
    payload: ITrack[]
}

interface FetchTrecksErrorAction {
    type: TrackActionTypes.FETCH_TRECKS_ERROR
    payload: ITrack[]
}

export type TrackAction = FetchTrecksAction | FetchTrecksErrorAction