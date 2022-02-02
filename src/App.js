import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  }
  
  render() {
    return (
   <div style={{background: this.state.color}}>
      <h1>Joseph Fernandes</h1>
				<NavBar />
        
        <p>Hello, I'm Joseph. I am an apprentice DevOps Engineer and I love messing up the codes of any project. You can contact me on <a href="https://linkedin.com/in/joseph-fernandes-14226a154"> <button onClick={this.changeColor}>
  				Linkdin</button></a></p>
        <img src= "https://media-exp1.licdn.com/dms/image/C4E03AQEFs3YzxlM5Pg/profile-displayphoto-shrink_200_200/0/1616095210302?e=1649289600&v=beta&t=3ksuX8hbh3rZnO9ycsugKNJvcxSehD4zMJwJVLvG0JI" />
      </div>
    );
  }
}

//ReactDOM.render(<Toggle />, document.getElementById('app'));

export default Toggle