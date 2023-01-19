import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { PlayerReducer } from "./PlayerReducer";
import { trackReducer } from "./TrackReducer";

const rootReducer = combineReducers({
    player: PlayerReducer,
    track: trackReducer
})

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        }
        if (state.count) nextState.count = state.count

        return nextState
    } else {
        return rootReducer(state, action)
    }
}

export type RootState = ReturnType<typeof rootReducer>