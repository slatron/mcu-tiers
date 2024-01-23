import React from 'react'
import TiersList from './TiersList'
import Item from './Item'
import api from '/src/api/api'
import {useSetTierNames} from './useSetTierNames'
import {sorting} from '/src/utils/sorting'

import './mcuRankPage.css';

const McuRankPage = () => {
  const [sorted, setSorted] = React.useState(false);
  const [allMovies, allTiers] = useSetTierNames(api.getTiers, api.getMovies)

  if (!allMovies.length || !allTiers.length) return null

  const pageContent = sorted ? allMovies.sort(sorting().sortBy('release', true)).map((item) => (
    <Item key={item.key} item={item} />
  )) : <TiersList items={allMovies} tiers={allTiers} />;

  return (
    <>
      <div className="heading-nav">
        <strong>Sorted By</strong>
        <button style={{'background-color': sorted ? 'white': 'pink'}} onClick={() => setSorted(false)}>tiers</button>
        <button style={{'background-color': sorted ? 'pink' : 'white'}} onClick={() => setSorted(true)}>release date</button>
      </div>
      {pageContent}
    </>
  )
}

export default McuRankPage
