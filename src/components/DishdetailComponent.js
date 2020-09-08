import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="col-md-5 col-12 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments == null) {
            return (
                <div></div>
            );
        }
        const comms = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p> -- {comment.author}, &nbsp;
                    {new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(comment.date))} </p>
                </li>
            )
        })
        return (
            <div className="col-12 col-md-5 m-1">
                <h4> Comments</h4>
                <ul className="list-unstyled">
                    {comms}
                </ul>
            </div>
        )
    }
    render() {
        if (this.props.selectedDish !=null) {
        return (
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
                {this.renderComments(this.props.selectedDish.comments)}
            </div>
        );
        }
        else {
            return(<div></div>);
        }
    }
}

export default DishDetail;