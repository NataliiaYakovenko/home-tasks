"use strict";
class Counter extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          count: 0
      };
  }
  increment(){
      // todo: state.count++
      this.setState({
          count: this.state.count +1
      })
      console.log('CLICK');
  }

  render(){
      const h2 = React.createElement('h2',{},this.state.count)
      const button = React.createElement('button',{onClick: ()=>{this.increment()}}, '+')
      return React.createElement(React.Fragment,{},h2,button);

  }
}
const component = React.createElement(Counter)

const root = document.querySelector('#root')
ReactDOM.render(component,root)



