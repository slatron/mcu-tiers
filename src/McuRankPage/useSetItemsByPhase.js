
export const PHASES = [
  {
    desc: 'Phase One',
    title: 'p1',
    start: '2008-05-01',
    end: '2012-04-05',
  },
  {
    desc: 'Phase Two',
    title: 'p2',
    start: '2012-04-06',
    end: '2015-07-18',
  },
  {
    desc: 'Phase Three',
    title: 'p3',
    start: '2015-07-19',
    end: '2019-07-03',
  },
  {
    desc: 'Phase Four',
    title: 'p4',
    start: '2019-07-03',
    end: '2022-11-12',
  },
  {
    desc: 'Phase Five',
    title: 'p5',
    start: '2022-11-13',
    end: '2025-06-01',
  },
];
const itemsByPhase = {};

export const useSetItemsByPhase = (allMovies) => {
  if (allMovies.length) {
    PHASES.forEach(phase => {
      itemsByPhase[phase.title] = allMovies.filter(item => item.release >= phase.start && item.release <= phase.end);
    })
  }
  return itemsByPhase;
}
