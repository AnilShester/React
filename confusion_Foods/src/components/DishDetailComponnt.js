import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


class DishDetail extends React.Component{
    constructor(props){
        super(props)
    }

    renderDish = (dish) => {
        return(
        <card>
        <CardImg top width="100%" src= {dish.image} alt="Card image cap" />
       <CardTitle>{dish.name}</CardTitle>
       <h3>dish Description</h3>
       <CardText>{dish.description}</CardText>
       </card>
        )
    }

    // renderComments = (comments) =>{
    //         return(
    //              <div>
    //                 <h1> Comments </h1>
               
    //             </div>
    //         )
        
    // }



    render(){
        const dishComment = this.props.dishDetail.comments.map((comment) =>{
            return(
                <div key = {comment.id}>       
                    <p> {comment.comment}</p>
                    <p>--{comment.author}, {comment.date}</p>
                    <p>{}</p>
                </div>
            )
        })



        return(
            <div className = "row">
                <div class="col-sm-6">
                    {this.renderDish(this.props.dishDetail)}
                </div>
                 <div class="col-sm-6">
                    <h1>Comments</h1>
                    {dishComment}
                 </div>  
            </div>
        )
                 
    }
}


export default DishDetail;