import React, {Component} from "react";


class Item extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: this.props.itemName,
            price: this.props.itemPrice 
        }
        this.handleClick = this.handleClick.bind(this, this.state.name, this.state.price);
    }

    handleClick(value, price) {
        var prix = price.replace('$', '');
        this.props.getValue(value, parseInt(prix));
    }

    
    render() {
        return(

            <div class="item">
                <img src={this.props.url} alt={this.state.name}/>
                <h4 id={this.state.name}> {this.state.name} </h4>
                <p id={this.state.price}> {this.state.price} </p>
                <button class="Button" onClick={this.handleClick} type="button">Ajouter au panier</button>
            </div>
        );
    }
}

export default Item ;