import React, {Component} from 'react';
import './charDetails.css';



const  Field = ({char, field, label}) =>{
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{char[field]}</span>
        </li>
    )
}
export {
    Field
}
export default class CharDetails extends Component {
    // gotService = new gotService()
    state = {
        char: null
    }
    componentDidMount(){
        this.updateChar();
    }
    componentDidUpdate(prevProps) {

        if(this.props.charId !== prevProps.charId){
            this.updateChar();
        }
    }
    updateChar() {
        const {charId} = this.props;
        if(!charId) {
            return;
        }
        const {getData } = this.props;
        // console.log(getData)
        getData(charId)
            .then((char) => {
                this.setState({char})
            })
        // this.foo.bar= 0
    }
    render() {
        if(!this.state.char) {
            return <span className="select-error"> Please select a character</span>
        }
        const {char} = this.state;
        const {name} = char;
        return (
            <div className="char-details rounded">
                <h4>{name}w</h4>
                <ul className="list-group list-group-flush">
                    
                    {
                        React.Children.map(this.props.children, (child) =>{
                           
                            return React.cloneElement(child, {char})
                        })
                    }
                    
                    {console.log(char)}
                    
                </ul>
            </div>
        );
    }
}