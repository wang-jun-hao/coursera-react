import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {

    renderDish(dish) {
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

    renderComments(comments) {
        if (comments == null) {
            return <div></div>
        }

        const commentsJsx = comments.map((comment) => {
            if (comment == null) {
                return <div></div>
            }

            return (
                <li key={comment.id} className="mb-4">
                    <p>{comment.comment}</p>
                    <span className="mr-1">--</span>
                    <span className="m-1">{comment.author}</span>
                    <span>,</span>
                    <span className="m-1">{comment.date}</span>
                </li>
            )
        });

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentsJsx}
                </ul>
            </div>
        )
    }

    render() {
        if (this.props.selectedDish == null) {
            return (
                <div className="row">
                </div>
            );
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail