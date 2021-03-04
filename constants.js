import namor from 'namor';

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  return {
    skillName: namor.generate({ words: 1, numbers: 0 }),
    skillDescription: namor.generate({ words: 1, numbers: 0 }),
    skillCategory: namor.generate({ words: 1, numbers: 0 }),
    skillExperience: Math.floor(Math.random() * 30)
  }
}

export function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}

export const initialItems = [
  {
    title: 'Item 1',
    children: [
      {
        title: 'Item 1.1',
        children: [
          {
            title: 'Item 1.1.1',
          },
        ],
      },
      {
        title: 'Item 1.2',
      },
    ],
  },
];

export const initialColumns = [
  {
    Header: 'SKILLS TABLE',
    columns: [
      {
        Header: 'Name',
        accessor: 'skillName',
      },
      {
        Header: 'Category',
        accessor: 'skillCategory',
      },
      {
        Header: 'Description',
        accessor: 'skillDescription',
      },
      {
        Header: 'Experience',
        accessor: 'skillExperience',
      },
    ],
  }
]