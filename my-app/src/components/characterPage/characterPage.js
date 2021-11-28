import React,{Component}from 'react';


import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import gotService from '../../services/gotService';

import RowBlock  from '../rowBlock';

export default class CharacterPage extends Component {
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
        getData={this.gotService.getAllChatacters}
        // renderItem={(item) =>item.name}
        renderItem={(item) =>`${item.name} (${item.gender})`}
      />

    )
    const charDetails  = (
       <CharDetails charId={this.state.selectedChar}  getData={this.gotService.getCharacter} >
         <Field field='gender' label='Gender'/>
         <Field field='born' label='Born'/>
         <Field field='died' label='Died'/>
         <Field field='culture' label='Culture'/>
         
         
      </CharDetails>
    )

    return(
      <RowBlock left={itemList} right={charDetails} />
    )
  }
}