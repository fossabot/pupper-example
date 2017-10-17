'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {SocketListener, withSocket} from '../../index';

class HashList extends SocketListener {
    onData(value) {
        this.props.onData(value);
    }

    render() {
        return <ul>{this.props.hashList.map((hash, key) => <li key={key}>{hash}</li>)}</ul>;
    }
}

HashList.propTypes = {
    onData: PropTypes.func.isRequired,
    hashList: PropTypes.array.isRequired,
};

export default withSocket(HashList)