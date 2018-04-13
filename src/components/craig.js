import React, {Component} from 'react'
import craigImg from '../images/craig.jpg'
import {Link} from 'react-router-dom'

class Craig extends Component{
  render() {
    return (
		<div>
			<div className="home">
				<button className="link">
					<Link to='/'>Home</Link>
				</button>
			</div>

			<img src={craigImg}/>
			<p id="greeting">Hi, I'm Craig</p>
		</div>
    )
  }
}
export default Craig;
