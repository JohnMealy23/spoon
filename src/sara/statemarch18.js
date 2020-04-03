import { frames } from "./frames"
import { Frame } from "./types"

const updateState = (type, payload) => {
    if (type = 'proceed') {
        updateState.push(payload)
    }
}

let state: Frame[] = [frames[0]]

export const updateState = () => {

}

const next = () => {}