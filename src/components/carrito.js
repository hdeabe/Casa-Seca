class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        contador : 0
      }; 
    }
    onClickHandler(){
      this.setState({
         contador : this.state.contador+1
      });
    }
    render(){
      return (
        <div>  
          <Contador valor={this.state.contador}/>
          <Button label="Add" onClick={()=>this.onClickHandler()} />
        </div>
      )
    }
  }
  //Functional Component
  const Contador = props => {
    return(
      <div>
        <h1>{props.valor}</h1>
      </div>
    );
  };
  const Button = props => {
      return (
        <button onClick={()=>props.onClick()}> {props.label}</button>
      );
  };
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )