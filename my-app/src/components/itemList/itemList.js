import React, {Component} from 'react';
import './itemList.css';

import  Spinner  from '../spinner/spinner'


class ItemList extends Component {
    
    
    renderItems(arr){
        
        return arr.map((item)=> {
            const {id} =item;
            
            const label =this.props.renderItem(item)
            return (
                <li key={id} className="list-group-item"
                onClick={()=>this.props.onItemSelected(id)}>
                    {label}
                    {/* {id} */}
                </li>
            )
        })
    }
    render() {
        // const {itemList} = this.state;
        
        // if(!itemList) {
        //     return <Spinner/>
        // }
        const {data} = this.props;
        const items =this.renderItems(data);
        
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}


const withData =(View) =>{
    return class extends Component {
        state ={
            data : null
        }
        componentDidMount() {

            const {getData } = this.props;
            getData()
                .then((data)=>{
                    this.setState({
                        data
                    })
                })
        }
        render() {
            const {data} = this.state;
        
            if(!data) {
                return <Spinner/>
            }
            return <View {...this.props} data={data}/>
            
        }
    }
    
    
 }

 ItemList.defaultProps ={
     onItemSelected: ()=>{}

 }

 export default withData(ItemList);
