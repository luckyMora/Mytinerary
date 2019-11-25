import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {fetchCities} from "./store/actions/cityActions"
import { connect } from "react-redux";
import Col from 'react-bootstrap/Col'

 class cities extends Component {
  state = {value: "",
            dataSearch:[]}
  componentDidMount(){
    this.props.fetchCities()
    }  
searchFunction(event){
  console.log()
  this.setState({value: event.target.value},()=>{console.log(this.state.value)})
}

filterFetch = () => {
  fetch(`http://localhost:5000/cities/all`)
.then(response => response.json())
    .then(data => this.setState({datasearch: data},()=>console.log(this.state.dataSearch)))}

  render() {
        
    if (this.state.cities) console.log(this.state.cities)
    
        return (
            <div>
              
              <h4>Cities</h4>

              <button>Search</button><input  type="text" id="searchbar" placeholder="Search" onChange={ e=> this.searchFunction(e)} ></input>



<Container style={{width:'80%', marginTop:'10px'}}>{this.props.cities.map((city)=>{return(
  <div>
  {(city.name.toUpperCase()).includes(this.state.value.toUpperCase()) || (city.country.toUpperCase()).includes(this.state.value.toUpperCase()) ?
  
  <Row style={{margin: '5px',padding:'20px',backgroundImage: `url(${city.img})`, backgroundSize:'cover', backgroundPosition: 'center', color:'white'}}>
    <Col>
    <Row >
      <Col >
      {city.name}
      </Col>
    </Row>
    
    <Row style={{fontSize:'12px', marginTop:'-7px', }}>
   <Col >   {city.country}</Col>
    </Row>
    </Col></Row> : null}</div>)
})}
  
</Container>



            </div>
        )
    }
}
/* function searcbarFilter(){
  if(this.props.cities.name === ){}
}
 */
const mapStateToProps = (state) => {
  console.log(state);
  return {
      cities: state.city.cities
  }
};

const mapDispatchToProps = dispatch => ({
  fetchCities: () => dispatch(fetchCities)
});
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(cities);