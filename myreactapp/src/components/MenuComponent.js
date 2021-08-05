import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

const MenuItem = (props) => {
    return (
        <Card onClick={() => props.onClick(props.dish.id)}>
            <CardImg object src={props.dish.image} alt={props.dish.name} />
            <CardImgOverlay>
                <CardTitle>{props.dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

const MenuComponent = (props) => {

    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <MenuItem onClick={props.onClick} dish={dish} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default MenuComponent;