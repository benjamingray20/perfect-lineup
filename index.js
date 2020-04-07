const validateLineup = (lineup) => {
  function getSalaries(lineup) {
    return lineup.salary
  }
  function getSalarySum(acc, n) {
    return acc + n
  }
  function getTeamId(lineup) {
    return lineup.teamId
  }
  function getGameId(lineup) {
    return lineup.gameId
  }
  function getPositions(lineup) {
    return lineup.position
  }

  const salaryList = lineup.map(getSalaries)
  const salarySum = salaryList.reduce(getSalarySum, 0)

  const teamIdList = lineup.map(getTeamId)
  const findTeamDuplicates = teamIdList.filter((item, index) => teamIdList.indexOf(item) != index)

  const gameIdList = lineup.map(getGameId)
  const findGameDupliactes = gameIdList.filter((item, index) => gameIdList.indexOf(item) != index)

  const positionList = lineup.map(getPositions)
  const findPositionDuplicates = positionList.filter((item, index) => positionList.indexOf(item) != index)


  if (salarySum > 45000) return false
  if (findTeamDuplicates.length >= 2) return false
  if (findGameDupliactes.length >= 3) return false
  if (findPositionDuplicates.length != 2) return false
  if (positionList.length != 9) return false
  else return true
}

module.exports = validateLineup
