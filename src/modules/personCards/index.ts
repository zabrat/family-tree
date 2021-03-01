import Component from './PersonCards';
import * as actions from './actions';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({
    peopleList: selectors.getPeopleList(state)
});

const mapDispatchToProps = (dispatch: any) => ({
    getPeopleList: () => dispatch(actions.onGetPeopleList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);