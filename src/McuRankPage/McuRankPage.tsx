import React, {createContext, useMemo} from 'react';
import TiersList from './TiersList';
import PhasesList from './PhasesList';
import Item from './Item';
import api from '../../src/api/api';
import {useSetTierNames} from './useSetTierNames';
import {useSetItemsByPhase} from './useSetItemsByPhase';
import {sorting} from '../../src/utils/sorting';

const SORT = {
  'TIER': 'TIER',
  'PHASE': 'PHASE',
  'LYNCHPIN': 'LYNCHPIN',
  'REVIEW': 'REVIEW',
};

export const AppContext = createContext({});

const McuRankPage = () => {
  const [page, setPage] = React.useState(SORT.TIER);
  const [filterTv, setFilterTv] = React.useState(true);
  const [filterMovies, setFilterMovies] = React.useState(true);
  const [allMovies, allTiers] = useSetTierNames(api.getTiers, api.getMovies);
  const itemsByPhase = useSetItemsByPhase(allMovies);

  const contextVal = useMemo(() => ({
    filterTv,
    filterMovies,
    itemsByPhase,
    allMovies,
    allTiers,
    page,
  }), [filterTv, filterMovies, page]);

  if (!allMovies.length || !allTiers.length) return null

  let pageContent;

  switch (page) {
    case SORT.PHASE:
      pageContent = <PhasesList itemsByPhase={itemsByPhase} />;
      break;
    case SORT.REVIEW:
      pageContent = allMovies
        .sort(sorting().sortBy('metacritic'))
        .map((item) => (
          <Item key={item.key} item={item} />
        ));
      break;
    case SORT.LYNCHPIN:
      pageContent = allMovies
        .filter(movie => movie.lynchpin === true)
        .sort(sorting().sortBy('release', true))
        .map((item) => (
          <Item key={item.key} item={item} />
        ));
      break;
    default:
      pageContent = <TiersList items={allMovies} tiers={allTiers} />;
      break;
  }

  return (
    <AppContext.Provider value={contextVal}>
      <div className="heading-nav">
        <span className="mobile-hide">Sort</span>
        <button style={{'backgroundColor': page === SORT.TIER ? 'pink': 'white'}} onClick={() => setPage(SORT.TIER)}>tiers</button>
        <button style={{'backgroundColor': page === SORT.PHASE ? 'pink' : 'white'}} onClick={() => setPage(SORT.PHASE)}>phases</button>
        <button style={{'backgroundColor': page === SORT.REVIEW ? 'pink' : 'white'}} onClick={() => setPage(SORT.REVIEW)}>reviews</button>
        <span className="mobile-hide">Filter</span>
        <span className="mobile-show">|</span>
        <button style={{'backgroundColor': filterMovies ? 'red' : 'white'}} onClick={() => setFilterMovies(prev => !prev)}>movies</button>
        <button style={{'backgroundColor': filterTv ? 'red' : 'white'}} onClick={() => setFilterTv(prev => !prev)}>tv</button>
      </div>
      <div className="page-content">
        {pageContent}
      </div>
    </AppContext.Provider>
  )
}

export default McuRankPage
