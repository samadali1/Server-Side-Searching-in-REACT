import React ,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { searchData } from '../src/config/api'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      dataCame : false,
      data:[],
      loader:true,
      input:'redux',
      text:'',
    }
    this.search = this.search.bind(this)
    this.goData = this.goData.bind(this)
  }
  componentDidMount(){
    const {input} = this.state;
    this.fetchedData(input)
  }
  async fetchedData(input){
    try{
      const result = await searchData(input)
      this.setState({data:result,dataCame:true})
      console.log(result)
    }catch(e){
      console.log(e)
    }finally{
      this.setState({loader:false})
    }
  }
  search(e){
    console.log(e.target.value);
    this.setState({text:e.target.value})
  }
  goData(){
    const {text} = this.state;
    this.fetchedData(text)
  }
  render(){
    const {loader,dataCame,data} = this.state;
  return (
    <div className="App">
        {loader && <h1>Loading.....</h1>}
        {!loader && <div><input type='text' placeholder='Search Api' onChange={(e)=>{this.search(e)}} /><button onClick={this.goData}>Search</button><hr /></div>}
        {dataCame && <div>{data.map((v)=>{return <p>{v.title}</p>})}</div>}
    </div>
  );
}
}

export default App;
