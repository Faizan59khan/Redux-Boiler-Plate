import React from 'react';
import { connect } from 'react-redux';
import { set_data } from '../../store/action'
import './style.css';
import { Link } from 'react-router-dom'; 
class Home extends React.Component{

    static getDerivedStateFromProps(props,state){     
        console.log("Props===> ",props);     //it rerurn the updated object of state                                
    }

      
    render(){
      //  console.log("Props",this.props)

      

      let user= {
          name: "mohsin",
          email: "mk@g.com"
      }
      console.log("user==>",this.props.users) //globally access horha
        return(
            <div>
                 <h1>Home</h1>                        {/* this.prop es liye kyu k har property prop mai save horhe */}
               
                 <button onClick={() => this.props.set_data(user)}>SETDATA</button>

              {/*    <a href="#" onClick={() => this.props.set_data(user.name)}>Set data</a> */}
            </div>
        )
    }
}

const mapStateToProps=(state)=>({  //es function ke saare properties home component mai ajayege jo props mai 
  // name: "Kashan"                 //save hojaege

   users: state.users

})

const mapDispatchToProp=(dispatch)=>(  //it is used to update state and functions are make in mDTP
    {
       //set_data: ()=> set_data()
       set_data: (data)=> dispatch(set_data(data)) //to connect with redux
    }
)


export default connect(mapStateToProps,mapDispatchToProp)(Home);