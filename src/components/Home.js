import React, { Component } from 'react';
import { connect } from 'react-redux'
import "materialize-css/dist/css/materialize.min.css";

class Home extends Component{

    handleClick = (id)=>{
        // eslint-disable-next-line react/prop-types
        this.props.addToCart(id); 
    }


    render(){
        // eslint-disable-next-line react/prop-types
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: £{item.price}</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
        
  

const mapStateToProps = (state)=>{
    return {
        items: state.items
         }
    }

    const mapDispatchToProps= (dispatch)=>{
    
        return{
            // eslint-disable-next-line no-undef
            addToCart: (id)=>{dispatch(addToCart(id))}
        }
    }

    export default connect(mapStateToProps,mapDispatchToProps)(Home)