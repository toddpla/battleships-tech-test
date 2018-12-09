export const startGame = (player_one, player_two) => ({
  type: 'START_GAME',
  player_one,
  player_two
})

export const nextPlayer = () => ({
  type: "NEXT_PLAYER"
})

export const placeShip = (ship, squares) => ({
  type: "PLACE_SHIP",
  ship,
  squares
})

export const placeStrike = square => ({
  type: "PLACE_STRIKE",
  square
})
