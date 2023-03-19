import React, {Component} from "react";

class Horloge extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.minuteur = setInterval( () => this.tic(), 1000 );
    }

    componentWillUnmount() {
        clearInterval(this.minuteur);
    }

    tic() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return(
            <div class="horloge">
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Horloge ;