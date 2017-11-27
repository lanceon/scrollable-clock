import * as React from 'react';
import { connect } from 'react-redux';
import { selectors } from '../reducers/positions';

interface OwnProps {
  x: number;
  y: number;
  r: number;
}

const circle: React.SFC<OwnProps> = ({ x, y, r }) => (
  <circle cx={x} cy={y} r={r} />
);

const mapStateToProps = (state, ownProps) => ({
  ...selectors.getCirclePosition(ownProps.frameR, ownProps.circle.position),
  r: (ownProps.circle.id + 1) * 2,
});

export default connect(mapStateToProps)(circle);
