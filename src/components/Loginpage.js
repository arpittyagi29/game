import React from 'react'
import './Loginpage1.css'
import { Card, Col, Row } from 'antd'
import 'antd/dist/antd.css';
import Post from './Post';


class Loginpage extends React.Component { 
    state={
        email:'',
        password:''
    }
    handlechange =(e)=>{
     const {name,value} = e.target;
     this.setState({[name]:value})
    }
    handleSubmit=(e)=>{
     <Post/>
    }
render(){
    return (
      <div className="mainPage">
         <div className="site-card-wrapper">
      <Row>
      <Col span={12}>
        <Card className="col1">
          <h1 className="headermain">Welcome To Mdn</h1>
          <hr className="headerline"/>
            <p>A paragraph is a series of related sentences developing a central idea, called the topic.
         Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group
         of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your
         broader argument.</p>
         <button className="submit1">Know More</button>
        </Card>
      </Col>
      <Col span={12}>
      <Card>
      <div>
            <h1>Sign In</h1>
            <form className="form" onsubmit={this.handleSubmit}>
                <div> <input type='email' name='email' placeholder='Email'  required onchange={this.handlechange} className="email"></input></div>
               <div><input type='Password' name='Password' placeholder='PassWord'  required onchange={this.handlechange} className="password"></input></div>
               <button onsubmit={this.handleSubmit} className="submit">Login</button>
               {/* <li><Link to="/Post"></Link>Second</li> */}

            </form>
        </div>
          </Card>
       
      </Col>
    </Row>
  </div>
      </div>  
    )
}
}

export default Loginpage

