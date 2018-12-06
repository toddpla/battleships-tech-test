export const startGame = (player_one, player_two) => ({
  type: 'START_GAME',
  player_one,
  player_two
})

export const nextPlayer = () => ({
  type: "NEXT_PLAYER"
})
