import React, { Component } from 'react';

class Counter extends React.Component {
    state = { 
        count: this.props.value
    };

    //constructor() {
    //super();
    //    this.handleIncrement = this.handleIncrement.bind(this);
    //}

    handleIncrement = () => {
        this.setState({count: this.state.count+1 });       
    }

    render() { 
        return (
            <div>
                <h4>{this.props.id}</h4>

                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.handleIncrement()} 
                    className="btn btn-secondary btn-sm"
                    >increment
                </button>
            </div>
        );
    }

    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() { 
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;