import React from 'react'
import {Media} from 'reactstrap'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import DishDetail from './DishDetailComponnt';

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedDish: null
        }
    }

onDishSelect(dish){
    this.setState({
        selectedDish: dish
    })
}

dishRender = (dish) =>{
    if (dish != null){
        return(
                <DishDetail dishDetail = {dish} />
        )
    }
}

    render(){   
        const menu = this.props.dishes.map((dish) =>{
            return (
                <div key = {dish.id} className = 'col-sm-3'>
                    <Card>
                     <CardImg top width="100%" src= {dish.image} alt="Card image cap" />
                     <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                          <Button onClick ={() => this.onDishSelect(dish)}> Details</Button>
                        </CardBody>
                    </Card>
                </div> 
                )
            })



        return(
            <div className = 'container'>
                <div className = 'row'>
                        {menu}
                </div>
            
            <div>
                {this.dishRender(this.state.selectedDish)}
            </div>
                
               b 
               
            </div>
        )
    }
}


export default Menu