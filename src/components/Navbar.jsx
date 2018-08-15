import React, { Component } from 'react';

class Navbar extends Component {
   state = {
      value1: 0,
      text:"",
      txtInput:[]

   };

   styles = {
       textAlign: "center",
       fontSize: 30,
       paddingLeft: 500,
    //    fontFamily: Serif ,

   };
  
//    constructor(){
//        super();
//        this.listUpdates = this.listUpdates.bind(this);
//    }

   
//    listUpdate = () => {
//      this.setState({value1: this.state.value1 +1});
//    }
    render() { 
        const { text } = this.state;
        const enabled =
              text.length > 0 
            ;

        return <React.Fragment>
            <nav className="navbar navbar-dark bg-info m-2">
  <span  style = {this.styles} className="navbar-brand mb-0 h1 "> MyTODO-LIST</span>
      </nav>


     <div className="container">
        <div className="row">
           <div className="col-8 border p-3">

             
      <input  className="form-control  mr-l-2 p-3" onChange={this.handleInputChange} placeholder="Add To Do List" aria-label="Search" value={this.state.text}/>

    <button onClick={this.listUpdates} disabled={!enabled} className= "btn btn-outline-primary m-2 " type="submit">AddList</button>

    {/*  */}
           </div>
           <div className="col-4 border p-3">
           <h3><u>DESCRIPTION</u></h3>
           <h6>ListNumber:<span className={this.colorBadge()} >{this.countList()}</span></h6>

           </div>
           <div className ="row">
               <div className ="col-8" >

                {   this.state.txtInput.map((v) => {
          return <div className="card " style={{width:750, height:"auto", marginLeft:0, marginTop:10, marginBottom:10,}}>
              <ul className="list-group list-group-flush m-2">
              <li className ="list-group-item">
              {v}<button className="btn btn-danger" style={{float:"right" }} onClick={this.handledelTodoItem.bind(this, v)}>Delete</button>

              </li>
    
              </ul>
              </div>
          
        })}
        {/* {this.state.txtInput.map((evt) =><div className="card " style={{width:750, height:"auto", marginLeft:0, marginTop:10, marginBottom:10,}} >

        
        <ul className="list-group list-group-flush m-2">


            <div className ="ca">
            <li className="list-group-item">{evt}<button className= "btn btn-danger " style={{float:"right" }} onClick = {this.handledelTodoItem}>Delete</button></li>
         
            </div>
        </ul> </div>)} */}
        
     
               </div>
           </div>
            </div>
       </div>
     

 </React.Fragment>;
    }


    colorBadge() {
        let color = "badge m-2 badge-";
        color += (this.state.value1 === 0) ? "warning " : "info";
        return color;
    }

    countList(){
          return (this.state.value1 ===0) ? "zero" : this.state.value1;    
        }
    


  

    listUpdates =()=> {
   

        this.state.txtInput.push(this.state.text);

        this.setState(this.state);        
        this.setState({ value1: this.state.value1+1});

       }

       handleInputChange = (evt) => {
        this.setState({ text: evt.target.value });

            
      }
  
   
      handledelTodoItem (v){

        for(let i = 0; i < this.state.txtInput.length; i++){
          if(this.state.txtInput[i] == v){
             delete this.state.txtInput[i];
          }
        }
        this.setState({txtInput:this.state.txtInput})
        this.setState({ value1: this.state.value1-1});
    }


 }
 
export default Navbar;