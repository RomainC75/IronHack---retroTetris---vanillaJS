const leaderBoard = [
  {
    name: 'LouDHand',
    score: 20000,
  },
  {
    name: 'Ridiculous30',
    score: 15000,
  },
  {
    name: 'KaRambar',
    score: 10000,
  },
  {
    name: 'DeadTerminal',
    score: 5000,
  },
  {
    name: 'ZeShell',
    score: 2500,
  },
  {
    name: 'Kris666',
    score: 2000,
  },
  {
    name: 'NoobTwenty',
    score: 2000,
  },
  {
    name: 'SuperBoy',
    score: 2000,
  },
  {
    name: 'Goldorak',
    score: 2000,
  },
  {
    name: 'ComeOn34',
    score: 2000,
  },
]

if (!localStorage.getItem('leaderBoard')) {
  localStorage.setItem('leaderBoard', JSON.stringify(leaderBoard))
}
