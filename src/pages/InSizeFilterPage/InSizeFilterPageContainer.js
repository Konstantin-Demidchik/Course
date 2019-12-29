import {
  compose,
  withState,
  lifecycle,
} from 'recompose';

import axios from 'axios';

import InSizeFilterPageView from './InSizeFilterPageView';

export default compose(
  withState('filters', 'setFiltersInfo', []),
  withState('isSearch', 'setIsSearch', false),
  withState('D', 'setD', ''),
  withState('d1', 'setd1', ''),
  withState('d2', 'setd2', ''),
  withState('d3', 'setd3', ''),
  withState('H', 'setH', ''),
  withState('B', 'setB', ''),
  withState('L', 'setL', ''),
  lifecycle({
    componentWillMount() {
      axios.get('http://localhost:8080/filters')
        .then(response => this.props.setFiltersInfo(response.data));
    }
  })
)(InSizeFilterPageView);
