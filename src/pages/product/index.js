import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Product extends Component {
    state = {
        product:{}
    }

    // Carregar as informações do produto
    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`products/${id}`);

        this.setState({ product: response.data });
    }

    render() {
        const { product } = this.state; //o nome da variável em {} deve ser o mesmo nome dentro do state

        return(
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>
                <div className="btn-voltar">
                    <Link to="/">Voltar</Link>
                </div>                
            </div>
        );
    }
}