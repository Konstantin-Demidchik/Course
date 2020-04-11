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
      axios.post('http://localhost:8080/auth', {
        email: 'test',
        password: 'test'
      })
        .then(response => console.log('response', response)).catch(error => window.location.pathname = 'sign_in');
    }
  })
)(AutosFilterPageView);
