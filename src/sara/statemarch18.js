
import { frames } from "./frames"
import { Frame } from "./types"

let state: Frame[] = [frames[0]]

export const updateState = (type, payload) => {
    if (type === 'proceed') {
        state.push(payload)
    }
    next(state)
}

const next = () => {}
