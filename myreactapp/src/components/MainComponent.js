import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from "./DishDetailComponent";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    setDishOnSelect = (dishId) => {
        this.setState({selectedDish: dishId});
    }

    render() {
        return (
            <div>
                <Navbar dark color="dark">
                    <div className="container">
                        <NavbarBrand href="/">My React App</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={DISHES} onClick={this.setDishOnSelect}/>
                <DishDetail selectedDish={this.state.dishes[this.state.selectedDish]} />
            </div>
        );
    }
}

export default Main;
