import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import actionTypes from 'src/store/actions.js';

class Validation extends React.Component {
		
	render() {
		const validation_message = (this.props.content.length >= 5) ?
			'text long enoughh' :
			'text too short';
		return (
			<div>
				{validation_message}
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		content: state.content,
	};
}

const mapDispatchToProps = (dispatch) => {

	return {
		onIngrAdded: (ingr_name) => dispatch({
			type: actionTypes.ADD_INGREDIENT,
			ingrName: ingr_name,
		})
	};
}

const propTypes = {
	content: PropTypes.string.isRequired,
};

Validation.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Validation);
