import React, { Component } from 'react';

class Counter extends React.Component {
    state = { 
        count: 0,
        imageUrl: 'https://picsum.photos/200'        
     };

     styles = {
         fontSize: 12,
         fontWeight: 'bold'
     };

    render() {         
        return (
            <div>
                <img src={this.state.imageUrl} alt="random image" />
                <span style={ this.styles } className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">increment</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;