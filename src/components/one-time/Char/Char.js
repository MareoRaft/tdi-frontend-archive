import React from 'react';
import PropTypes from 'prop-types';

// import styles from './Char.module.scss';

class Char extends React.Component {
	render() {
		return (
			<div
				// className={styles.Char}
				onClick={this.props.onClick}
			>
				{this.props.char}
			</div>
		);
	}
}

const propTypes = {
	onClick: PropTypes.func,
	char: PropTypes.string.isRequired,
};

Char.propTypes = propTypes;
export default Char;
