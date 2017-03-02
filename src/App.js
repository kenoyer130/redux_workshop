import React, { Component } from 'react';
import './App.css';
import SlideRoot from './SlideRoot'

class App extends Component {

  constructor() {
    super();

    this.state = {
       currentIndex: 0,
       total: 0,
       go: ''
    };
  }

  componentDidMount() {
    document.onkeydown = (e) => {
      if(e.code === 'ArrowLeft') {
        this.goBack();
     } else if(e.code === 'ArrowRight' || e.code === 'Space') {
       this.goNext();
     }
    };
  }

  goBack = () => {
      if(this.state.currentIndex - 1 < 0) {
        return;
      }

      const i = this.state.currentIndex - 1;
      this.setState({...this.state, currentIndex: i});
  }

  goNext = () => {
      if(this.state.currentIndex + 1 > this.state.total -1) {
        return;
      }

      const i = this.state.currentIndex + 1;
      this.setState({...this.state, currentIndex: i});
  }

  onSlidesLoaded = (totalSlides) => {
    this.setState({...this.state, total: totalSlides});
   /* this.setState({...this.state,
       total: totalSlides, 
       currentIndex: totalSlides - 1});*/
  }

  onGoChange = (value) => {
        this.setState({...this.state, go: value});
        
  }

  onGo = () => {
        this.setState({...this.state, go: '', currentIndex: Number(this.state.go) - 1});
  }

  render() {
    return (
      <SlideRoot 
        currentIndex={this.state.currentIndex} 
        total={this.state.total}
        go={this.state.go}
        onSlidesLoaded={this.onSlidesLoaded}
        onGoChange={this.onGoChange}
        onGo={this.onGo}
      />
    );
  }
}

export default App;
