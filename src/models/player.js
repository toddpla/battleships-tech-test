import Grid from './Grid'

class Player {
  constructor(kargs) {
    this.name = kargs.name
    this.ships = kargs.ships
    this.strikes = []
    this.grid = new Grid({ships: this.ships})
  }

  isSetup() {
    return this.ships.filter(ship => ship.size !== ship.squares.length).length === 0
  }

}

export default Player
