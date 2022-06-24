const cnv = document.getElementById('canvas');
const ctx = cnv.getContext('2d');
cnv.height = 600;
cnv.width = 600;

let tiles = []

let board = {
    tile: class {
        constructor(x, y, id, color) {
            this.x = x
            this.y = y
            this.id = id
            this.color = color
        }
        draw() {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, 75, 75)
        }
    }
}


let tileColor = 'white'
let tileIdentifier = [0,0]
for(let x = 0; x < 600; x+= 75) {
    tileIdentifier[0] ++
    for(let y = 0; y <= 600; y += 75) {
        tileIdentifier[1]++
        tiles.push(new board.tile(x, y, tileIdentifier, tileColor))
        if(tileColor === 'white') {
            tileColor = 'rgb(142, 94, 47)'
        } else {
            tileColor = 'white'
        }
    }
}

for(let i = 0; i < tiles.length; i++) {
    tiles[i].draw()
}