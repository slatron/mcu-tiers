import { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import {AppContext} from '/src/McuRankPage/McuRankPage';

const Item = ({item}) => {
  const [showReview, setShowReview] = useState(false);
  const {
    filterMovies,
    filterTv,
    allTiers,
    itemsByPhase,
    allMovies,
    page} = useContext(AppContext);

    console.log({ filterMovies, filterTv, allTiers,
      itemsByPhase,
      allMovies,
      page, item });


  if (!filterMovies && item.medium === 'movie') {
    return null;
  }

  if (!filterTv && ['series', 'special'].includes(item.medium)) {
    return null;
  }

  const { metacritic: mc } = item;

  const rating = parseInt(mc) > 75 ? 'top' : parseInt(mc) > 63 ? 'mid' : 'low';

  const toggleReview = e => {
    e.stopPropagation();
    setShowReview(prev => !prev);
  }
  return (
    <section
      className={`item ${item.key}${item.review && ' hand'}`}
      data-testid="item"
      style={{backgroundImage: `url('images/${item.key}.jpg')`}}
      key={item.key}
      onClick={toggleReview} 
    >
      {item.tier !== 'incomplete' && <span className="ranking clarify">Rank: {item.rank}</span>}
      <span className="title clarify">
        {item.title}
      </span>
      <span className={`metacritic ${rating}`}>
        {mc}
      </span>
      {showReview && item.review && (
        <>
        <div className="item-review" />
        <div className="item-review-text" onClick={toggleReview}>{item.review}</div>
        </>
      )}
    </section>
  )
}

Item.propTypes = {
  item: PropTypes.object
}

export default Item
