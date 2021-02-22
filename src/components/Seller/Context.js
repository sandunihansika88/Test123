import React, {Component} from 'react';
import { rowData } from './ProductData';
//import { ProductConsumer } from './Context';

const ProductContext = React.createContext();

 class ProductProvider extends Component {

    state = {
        Alldata : rowData,
        id : '',
        title :'',
        info :'',
        company :'',
        updateEdit :[]
    }
    getRecord = (id) => {
        const product = this.state.Alldata.find(item => item.id === id);
        return product;
    }
    onEdit = (id) => {
        const tempProduct = this.state.Alldata;
        const index = tempProduct.indexOf(this.getRecord(id));
        const selectedRecord = tempProduct[index];
        this.setState({
            id : selectedRecord['id'],
            title : selectedRecord['title'],
            info : selectedRecord['info'],
            price : selectedRecord['price'],
            company : selectedRecord['company']
        })
    }
    render(){
        //console.log(this.state.Alldata);
        return (
            <div>
                <ProductContext.Provider
                    value={{...this.state,
                    onEdit : this.onEdit}}
                    >
                        {this.props.children}
                </ProductContext.Provider>

            </div>
        )
    }
}




const ProductConsumer = ProductContext.Consumer;

export  {ProductProvider, ProductConsumer}
