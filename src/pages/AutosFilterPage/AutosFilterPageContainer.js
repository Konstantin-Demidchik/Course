import {
  compose,
  withState,
  lifecycle,
} from 'recompose';

import axios from 'axios';

import AutosFilterPageView from './AutosFilterPageView';

export default compose(
  withState('autos', 'setAutosInfo', []),
  withState('filters', 'setFiltersInfo', []),
  withState('markChoose', 'setMarkChoose', {}),
  withState('modelChoose', 'setModelChoose', {}),
  withState('engineChoose', 'setEngineChoose', []),
  withState('filterChoose', 'setFilterChoose', null),
  lifecycle({
    componentWillMount() {
      axios.get('http://localhost:8080/autos')
        .then(response => this.props.setAutosInfo(response.data))
        .then(() => {
          axios.get('http://localhost:8080/filters')
            .then(response => this.props.setFiltersInfo(response.data))
        });
    }
  })
)(AutosFilterPageView);
