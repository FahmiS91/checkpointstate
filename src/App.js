import {Component} from 'react'
import './style.css'
class App extends Component {
   state={
        Person:{ fullName:"Fahmi Sifi",bio:"My passion is coding", imgSrc:"image.jpg", profession:"Web Developper"},
        show:"true",
        time:new Date
    }
    handleClick=()=>{
        this.setState({show:!this.state.show})
    }
    componentDidMount(){
        setInterval(()=>this.setState({time:new Date}),1000)
    }
    render(){
   
    const {fullName,bio,imgSrc,profession}=this.state.Person

      return(
          <div className="info"> 
           {this.state.show?<div><p>{fullName}</p>
            <p>{profession}</p>
            <p>{bio}</p>
            <img src={imgSrc} alt=""/>
            </div>:null}
            <button onClick={this.handleClick}>{this.state.show?"Hide":"show"}</button>
            <p>{this.state.time.toLocaleTimeString()}</p>
          </div>
      )
  }
}
export default App 