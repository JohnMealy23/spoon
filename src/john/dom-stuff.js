
let id = 0;
let autoSpawn = false

const makeNode = (parent) => {
    const node = {}
    node.parent = parent
    node.id = ++id
    node.spawn = () => makeNode(node)
    
    node.heartBeat = setInterval(() => {
        if (autoSpawn) {
            makeNode(node)
        }
    }, 1000)
    
    node.kill = () => {
        clearInterval(node.heartBeat)
        if ([...document.body.childNodes].includes(node.giu)) {
            document.body.removeChild(node.giu)
        }
        if (node.parent && node.parent.kill) {
            node.parent.kill()
        }
    }

    node.giu = getGui(node)
    document.body.appendChild(node.giu)
}

const getGui = (node) => {
    const gui = document.createElement('div')
    gui.style.width = '100px'
    gui.style.height = '100px'
    gui.style.background = 'red'
    gui.style.margin = '5px'
    gui.style.float = 'left'

    const spawnButton = document.createElement('button')
    spawnButton.onclick = node.spawn
    spawnButton.innerText = 'spawn!'
    gui.appendChild(spawnButton)

    const killButton = document.createElement('button')
    killButton.onclick = node.kill
    killButton.innerText = 'kill!'
    gui.appendChild(killButton)
    
    const parentLabel = document.createElement('div')
    parentLabel.innerText = `Parent: ${node.parent.id}`
    gui.appendChild(parentLabel)
    
    const idLabel = document.createElement('div')
    idLabel.innerText = `Id: ${node.id}`
    gui.appendChild(idLabel)

    return gui
}

makeNode({
    id,
    parent: null
})

const autoSpawnButton = document.createElement('button')
autoSpawnButton.onclick = () => {
    autoSpawn = !autoSpawn
    const actionWord = autoSpawn ? 'Stop' : 'Start'
    autoSpawnButton.innerText = `${actionWord} spawning!`
}
autoSpawnButton.innerText = 'Start spawning!'
document.body.appendChild(autoSpawnButton)
