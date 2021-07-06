import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody} from 'reactstrap';

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

    renderDish(dish) {
        if (dish == null) {
            return (<div></div>);
        }

        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
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
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default MenuComponent;