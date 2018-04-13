import React, { Component } from 'react'
import apartments from '../store/apartments'
import {Link} from 'react-router-dom'

class AptDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      dwelling: apartments,
    }
  }

  componentWillMount(){
    const id = this.props.match.params.id
    this.setState({aptId: id})
    let apt = this.state.dwelling.find(function(listing){
      return listing.id === parseInt(id)
    })
    if(apt){
      this.setState({dwelling: apt})
    }
  }

  render() {


    var aval = this.state.dwelling.forRent
    function rental(){
      if (aval === true){
        return "Yes"
      }else{
        return "No, Property is rented"
      }
    }
console.log(this.state.dwelling.photo);
    return (
		<div>
			<div className="home">
				<button className="link">
					<Link to='/'>Home</Link>
				</button>
			</div>

			<h2>{this.state.dwelling.address}</h2>

			<div className="apartment__block">
				<div className="apartment__img">
					<img src={this.state.dwelling.photo} alt="exterior apartment photo"/>
				</div>

				<div className="apartment__details">
					<ul>
						<li className="apt-item"><strong>Beds:</strong>
							<span className="deets">{this.state.dwelling.beds}</span>
						</li>
						<li className="apt-item"><strong>Baths:</strong>
							<span className="deets">{this.state.dwelling.baths}</span>
						</li>
						<li className="apt-item"><strong>Rent:</strong>
							<span className="deets">{this.state.dwelling.price}</span>
						</li>
						<li className="apt-item"><strong>Avaliable?</strong>
							<span className="deets">{rental()}</span>
						</li>
					</ul>
				</div>

			</div>
		</div>
    );
  }
}

export default AptDetail;
