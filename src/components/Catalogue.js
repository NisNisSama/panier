import React, {Component} from "react";
import Panier from './Panier.js';
import Item from './Item';
import item1 from './../images/f2.jpg';
import item2 from './../images/f1.jpg';
import item3 from './../images/f3.jpg';
import item4 from './../images/raisin.jpg';
import item5 from './../images/rouge.jpg';
import item6 from './../images/verte.jpg';

class Catalogue extends Component{

    constructor(props){
        super(props);
        this.state = {items: [{itemName: 'Roses', itemPrice: '12$', url: item1},
                            {itemName: 'Fleurs Blanches', itemPrice: '10$', url: item2},
                            {itemName: 'Arc-en-ciel', itemPrice: '8$', url: item3},
                            {itemName: 'Jus de raisin', itemPrice: '15$', url: item4},
                            {itemName: 'Pomme rouge', itemPrice: '13$', url: item5},
                            {itemName: 'Pomme verte', itemPrice: '13$', url: item6}
                            ],
            panier: [] ,
            nbArticle: 0,
            prixTotal: 0
        };
        Catalogue.videurPanier = this.videurPanier.bind(this);
        //passing argument to the getValue from the child
        Catalogue.getValue = this.getValue.bind(this);
        Catalogue.functionItem = this.functionItem.bind(this);
    }

    videurPanier() {
        this.setState({ panier: [],
            nbArticle: 0,
            prixTotal: 0
        });
    }

    UpdateNbArticle(panier){
        var totalArticle = 0;
        panier.forEach(
            function(elem){
                return totalArticle += 1*elem.nombre;
            }
        )
        this.setState({nbArticle: totalArticle})
    }

    getPrixTotal(panier){
        var prixTotal = 0;
        panier.forEach(
            function(elem){
                return prixTotal += (elem.price*elem.nombre)
            }
        )
        this.setState({prixTotal: prixTotal});
    }

    //Hooker of Items
    getValue(itemName, itemPrice){
        var elems = this.state.panier;
        if (elems.find(elem => elem.name === itemName))
        {
            elems.find(function(elem) {
                if(elem.name === itemName)
                    return elem.nombre += 1;
            } )
        }
        else{
            elems = elems.concat({name: itemName, price: itemPrice, nombre: 1});
            this.setState({panier: elems});
        }
        this.getPrixTotal(elems);
        this.UpdateNbArticle(elems);
    }

    functionItem(newPanier){
        this.setState({panier: newPanier});
        this.getPrixTotal(newPanier);
        this.UpdateNbArticle(newPanier);
    }

    render() {


        return(

            <div class="catalogue">

                <Panier content={this.state.panier} article={this.state.nbArticle} totalPrice={this.state.prixTotal}
                    itemFunction={Catalogue.functionItem}
                />
                
                <ol class="listItem">
                    {
                        this.state.items.map(item => 
                            <li><Item getValue={Catalogue.getValue} url={item.url} itemName={item.itemName} itemPrice={item.itemPrice}/></li>
                        )
                    }
                </ol>

            </div>
        );
    }
}

export default Catalogue ;