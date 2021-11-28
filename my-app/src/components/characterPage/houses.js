import React,{Component}from 'react';


import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import gotService from '../../services/gotService';

import RowBlock  from '../rowBlock';

export default class HousesPage extends Component {
  gotService = new gotService();
 
  state ={
    selectedChar: null,
    error: false
  }
  onItemSelected =(id)=>{
    this.setState({
        selectedChar: id
    })
  }
  componentDidCatch() {
      console.log('error-CharacterPage');
      this.setState({
          error: true
      })
  }
  render() {
    if(this.state.error) {
        return <ErrorMessage/>
    }
    const itemList= (
      <ItemList onItemSelected={this.onItemSelected} 
        // getData={this.gotService.getAllBooks}
        getData={this.gotService.getAllHouses}
        // renderItem={(item) =>item.name}
        renderItem={(item) =>item.name }
      />

    )
    const charDetails  = (
       <CharDetails charId={this.state.selectedChar}  getData={this.gotService.getHouses}>

         <Field field='region' label='region'/>
         <Field field='word' label='word'/>

         
         
      </CharDetails>
    )

    return(
      <RowBlock left={itemList} right={charDetails} />
    )
  }
}