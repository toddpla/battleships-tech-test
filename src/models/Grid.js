class Grid {

  constructor(kwargs) {
    this.ships = kwargs.ships
  }

  shipSquares() {
    return [].concat.apply([], this.ships.map(ship => ship.squares))
  }

  squares(view, opponentStrikes) {
    const squares = []
    const shipSquares = this.shipSquares()
    for (let i =0; i < 100; i++) {
      if (shipSquares.includes(i) && opponentStrikes.includes(i)) {
        squares.push('ship-striked')
      } else if (shipSquares.includes(i) && view === 'owner') {
        squares.push('ship')
      } else if (opponentStrikes.includes(i)) {
        squares.push('strike')
      } else {
        squares.push('empty')
      }
    }
    return squares
  }

  ownerView(opponentStrikes) {
    return this.squares('owner', opponentStrikes)
  }

  opponentView(opponentStrikes) {
    return this.squares('opponent', opponentStrikes)
  }
}

export default Grid
