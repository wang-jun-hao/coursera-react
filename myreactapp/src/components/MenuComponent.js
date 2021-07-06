import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody} from 'reactstrap';
import DishDetailComponent from "./DishDetailComponent";

class MenuComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        };
    }

    setDishOnSelect(dish) {
        this.setState({selectedDish: dish});
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.setDishOnSelect(dish)}>
                        <CardImg object src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetailComponent selectedDish={this.state.selectedDish}/>
            </div>
        );
    }
}

export default MenuComponent;