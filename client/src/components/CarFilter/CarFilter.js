import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dropdown from '../Dropdown/Dropdown';
import {sortBy,} from '../../actions';
import {SORT_OPTIONS,} from '../../constants';

class CarFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='wrapper' style={{margin: '10px'}}>
        <Dropdown
          value={this.props.filters.sortType}
          label='Sort By'
          labelClass='bold'
          valueList={SORT_OPTIONS}
          onChange={e => {
            this.props.dispatch(sortBy(e.target.value));
          }}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.cars.filters,
  }
};

export default connect(mapStateToProps)(CarFilter);

