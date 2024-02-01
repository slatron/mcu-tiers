import PropTypes from 'prop-types'
import Item from '../Item'
import {sorting} from '/src/utils/sorting'

import './Tier.css'

const Tier = ({items, tier, sortBy = 'rank', headingClass = ''}) => {

  const itemListDOM = items.sort(sorting().sortBy(sortBy, true)).map((item) => (
      <Item key={item.key} item={item} />
    )
  )

  return (
    <div data-testid="tier" className={`tier tier-${tier.title}`}>
      <p className={headingClass}>{tier.desc}</p>
      {itemListDOM}
    </div>
  )
}

Tier.propTypes = {
  items: PropTypes.array,
  tier: PropTypes.object,
  sortBy: PropTypes.string,
  headingClass: PropTypes.string,
}

export default Tier
