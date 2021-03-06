export const state = {
  user: {
    userId: '5123423d2321f',
    facebookToken: null,
    googleToken: null,
    firstName: 'John',
    lastName: 'Jillian',
    email: 'j.jillian@example.com',
    stageName: 'Pickup Killer',
    isRapper: true,
    battles: [
      {
        total: '30',
        won: '22',
        lost: '8'
      }
    ],
    likedRappers: [
      {
        id: '41234g21345h3214',
        stageName: 'Pickup Killer',
        rapperId: '152342f52345'
      },
      {
        id: '82348u52h2345348',
        stageName: 'Childish Grownup',
        rapperId: '524235324535'
      },
      {
        id: '2345h2345j2345j3',
        stageName: 'No Chance Singer',
        rapperId: '345346314534'
      },
      {
        id: '345h1345h152345j',
        stageName: 'Fake',
        rapperId: '674563567455'
      },
      {
        id: '4215343h51345214',
        stageName: 'Vic Chantin',
        rapperId: '634562363456'
      }
    ],
    favoriteBattles: [
      {
        battleId: '2394857623b347586d',
        name: 'rapper vs. rapper',
        winner: 'Pickup Killer'
      },
      {
        battleId: '424345g2345gb23455',
        name: 'rapper vs. rapper',
        winner: 'Pickup Killer'
      },
      {
        battleId: '746345n34573456n45',
        name: 'rapper vs. rapper',
        winner: 'Pickup Killer'
      }
    ]
  },
  battles: {
    0: {
      id: '2394857623b347586d',
      name: 'rapper vs. rapper',
      winner: 'Pickup Killer',
      time: '11:00',
      voteDays: '30'
    },
    1: {
      id: '424345g2345gb23455',
      name: 'rapper vs. rapper',
      winner: 'Pickup Killer',
      time: '11:15',
      voteDays: '30'
    },
    2: {
      id: '14556534g354g46643',
      name: 'rapper vs. rapper',
      winner: 'Pickup Killer',
      time: '11:30',
      voteDays: '30'
    },
    3: {
      id: '43566n36342n623565',
      name: 'rapper vs. rapper',
      winner: 'Pickup Killer',
      time: '11:45',
      voteDays: '30'
    },
    4: {
      id: '746345n34573456n45',
      name: 'rapper vs. rapper',
      winner: 'Pickup Killer',
      time: '12:00',
      voteDays: '30'
    }
  },
  beats: {
    0: {
      id: '',
      producer: '',
      dateAdded: '',
      genre: '',
      length: ''
    }
  }
};
