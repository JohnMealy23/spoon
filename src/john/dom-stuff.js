
let id = 0;
let autoSpawn = false

const makeNode = (parent) => {
    const node = {}
    node.parent = parent
    node.id = ++id
    node.color = mutateColor(parent.color)
    node.spawn = () => makeNode(node)
    node.lifeProcesses = []

    node.lifeProcesses.push((node) => autoSpawn && makeNode(node))
    node.lifeProcesses.push((node) => {
        // node.color = mutateColor(node.color)
        node.gui.style.background = node.color
    })

    node.heartBeat = setInterval(() => {
        node.lifeProcesses.forEach((process) => process(node))    
    }, 1000)
    
    node.kill = () => {
        clearInterval(node.heartBeat)
        if ([...document.body.childNodes].includes(node.gui)) {
            document.body.removeChild(node.gui)
        }
        if (node.parent && node.parent.kill) {
            node.parent.kill()
        }
    }

    node.gui = getGui(node)
    document.body.appendChild(node.gui)
}

const getGui = (node) => {
    const gui = document.createElement('div')
    // gui.style.width = '10px'
    // gui.style.height = '10px'
    gui.style.background = node.color
    gui.style.margin = '2px'
    gui.style.padding = '2px'
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

const pickColor = () => {
    const red = pickRandom255()
    const green = pickRandom255()
    const blue = pickRandom255()
    return `rgb(${red}, ${green}, ${blue})`;
}

const mutateColor = (colorStr) => {
    const colors = colorStr
        .replace('rgb(', '')
        .replace(')', '')
        .split(', ')
    const newColors = mutateOne(colors)
    return `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`;
}

const mutateOne = (colors) => {
    const colorIndex = Math.floor(Math.random() * 2.999999999)
    const delta = Math.random() > .5 ? 25 : -25
    colors[colorIndex] = Number(colors[colorIndex]) + delta
    if (colors[colorIndex] < 0) {
        colors[colorIndex] = 0
    } else if (colors[colorIndex] > 255) {
        colors[colorIndex] = 255
    }
    return colors
}

const pickRandom255 = () => Math.floor(Math.random() * 255.999999999)

makeNode({
    id,
    color: pickColor(),
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
