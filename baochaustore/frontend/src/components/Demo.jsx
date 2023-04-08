import React, { Component } from 'react';

class TestComponent extends Component {
    constructor(props) {
        super(props);
        // khởi tạo giá trị state
        this.state = { isLoading: false };
    }
    render() {
        return <div>TestComponent</div>;
    }
}

export default TestComponent;



