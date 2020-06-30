import React, { Component } from 'react'
import EditFile  from './EditFile';
import './App.css';
import { Button, Form, Input } from 'antd';
import { editFileService } from './services/editFileService';


export default class App extends Component {


  constructor(props){
    super(props);
    this.state={
     file:{},
    }
  }

 componentDidMount = ()=>{
    editFileService.getContentFile().then(response=>{
      
      if(response.status === 200){
        console.log("response",response.data)
        this.setState({ file : response.data});
      }
      else
        console.log("erreur coté serveur: ",response)
    });
 }
 handleChange = e =>{
  const { name, value } = e.target;
  let file = this.state.file;
  file.content = value;
  this.setState({ file });
  console.log(this.state.file.content);
 }
 handleSubmit = ()=>{
  editFileService.saveContentFile(this.state.file.content).then(response=>{
      
    if(response.status === 200){
      console.log("response file modified",response.data)

      // this.setState({ file : response.data});
    }
    else
      console.log("erreur coté serveur: ",response)
  });
 }
  render() {
    return (
      <div className="App">
            {/* <EditFile file={this.state.file}/>  */}
            <Form onSubmitCapture={this.handleSubmit}>
                <Input  className="namefile" value={this.state.file.name} />
                <Input.TextArea rows={15} className="content" type="text" value={this.state.file.content} name="content" onChange={this.handleChange}/>
                <Button type="primary" htmlType="submit" className="savebtn" >
                    Save
                </Button>
            </Form>
      </div>
    )
  }
}
