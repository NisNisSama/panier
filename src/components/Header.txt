import React, {Component} from 'react';
import Horloge from './Horloge';

class Header extends Component{

    render() {
        return (
            <div class="header">
                <div class="bienvenue">
                    <h2>Bienvenue {this.props.name}</h2>
                </div>
                
                
                <Horloge />
            </div>
        );
    }
}

export default Header;