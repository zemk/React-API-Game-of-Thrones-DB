
export default class GotService {
  constructor(){
    this._apiBase= 'https://www.anapioficeandfire.com/api/';
  }
 
  getResourece =async  (url) => {
    const res =await fetch(`${this._apiBase}${url}`);
    if(!res.ok) {
      throw new Error(`could no fetch ${url}, status: ${res.status}`)
    }

    return await res.json();
  };
   getAllChatacters= async()=> {
    // 1page
    const res= await this.getResourece('characters?page=5&pageSize=10');
    return res.map(this._transformCharacter);
  }

  
  getCharacter =async (id) =>{
     const character= await this.getResourece(`/characters/${id}`);
     return this._transformCharacter(character);
  }
  getAllBooks =  async()=> {
    // 'books?page=2&pageSize=10'
    const res= await this.getResourece('/books/');
    return res.map(this._transformBook);
  }
  getBooks = async(id)=> {
     const book= await this.getResourece(`books/${id}`);
     return this._transformBook(book);
  }
  getAllHouses = async()=> {
    const res= await this.getResourece(`/houses/`);
     return  res.map(this._transformHouse);
   
  }
  getHouses=  async(id) => {

     const res= await this.getResourece(`/houses/${id}/`);
     return this._transformHouse(res);
  }
  isSet= (data)=> {
    if(data) {
      return data
    }else {
      return 'no data :('
    }
  }
  _extractId = (item) => {
    const idRegExp =/\/([0-9]*)$/;
    return item.url.match(idRegExp)[1];

  }
  _transformCharacter =(char)=> {
    
    
    return {
      id: this._extractId(char),
      name: this.isSet(char.name),
      gender: this.isSet(char.gender),
      born: this.isSet(char.born),
      died: this.isSet(char.born),
      culture: this.isSet(char.culture)
    }    
  }
  _transformHouse =(house)=> {
    return {
      id: this._extractId(house),
      name: this.isSet(house.name),
      region: this.isSet(house.region),
      word: this.isSet(house.word),
      titles: this.isSet(house.titles),
      overlord: this.isSet(house.overlord),
      ancestralWeapons: this.isSet(house.ancestralWeapons)
    }
  }
  _transformBook =(book) => {
    return {
      id: this._extractId(book),
      name: this.isSet(book.name),
      numberOfPages: this.isSet(book.numberOfPages),
      publiser: this.isSet(book.publiser),
      released: this.isSet(book.released)
    }
  }
}
