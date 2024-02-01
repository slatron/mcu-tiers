// This component takes items and tiers and sorts them into Tier components
import PropTypes from 'prop-types';
import Tier from '../Tier';
import { PHASES } from '/src/McuRankPage/useSetItemsByPhase';

const PhasesList = ({itemsByPhase}) => (
  <div className="tiers-list">
    {PHASES.map(phase => (
      <Tier tier={phase} sortBy="release" headingClass="heading-phase" key={phase.title} items={itemsByPhase[phase.title]} />
    ))}
  </div>
);

PhasesList.propTypes = {
  itemsByPhase: PropTypes.object,
}

export default PhasesList
