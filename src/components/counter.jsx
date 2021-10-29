import React, { Component } from 'react';

class Counter extends React.Component {
    state = { 
        count: 0,
        tags: ['tags1', 'tags2', 'tags3']
     };

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">increment</button>
                <ul>
                    { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
                </ul>
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