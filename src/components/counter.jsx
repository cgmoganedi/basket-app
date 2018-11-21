import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1','tag2','tag3']
    };

    styles ={
        fontSize: 20,
        fontWeight: 'bold'
    };

    constructor()
    {
        super();
        //this.handleIncrement = this.handleIncrement.bind(this);
    }

    componentDidUpdate(prevProps, prevState)
    {
        // after a component has been updated
        if(prevProps.counter.value !== this.props.counter.value)
        {
            // ajax call and get new data from the server
        }
    }

    componentWillUnmount()
    {
        // called just before a components is removed from the dom
        console.log("Unmount")
    }


    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags!</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
    /*
    handleIncrement()
    {
        console.log("Increment clicked", this);
    }*/
    /*
    handleIncrement = (product) =>
    {
        this.setState({value: this.state.value + 1})
    }
    */

    handleReset = () =>
    {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });

        this.setState({ counters });
    };

    render() { 
        console.log("Counter - Rendered")

        return (
            <React.Fragment>
                {this.props.children}
                <img src={this.state.imageUrl} alt=""/>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                
                <button onClick = {(/* null */) => this.props.onIncrement(this.props.counter)} style={{padding: '10px'}} className="btn btn-seconday btn-sm">Increment</button>

                {this.renderTags()}
                {this.state.tags.length === 0 && 'Please add new tags'}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>
                    Delete
                </button>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount()
    {
        const {value} = this.props.counter;
        return value === 0 ? <h4>"Zero"</h4>: value;
    }
}
 
export default Counter;