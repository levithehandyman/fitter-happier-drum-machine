import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const radioSounds = [
  {
    keyCode: 81,
    key: 'Q',
    audioID: 'fitter',
    src: 'https://res.cloudinary.com/dnv60ey6k/video/upload/v1613076443/fitter_riupy7.wav'
  },
 
  {
    keyCode: 87,
    key: 'W',
    audioID: 'happier',
    src: 'https://res.cloudinary.com/dnv60ey6k/video/upload/v1613076443/fitter/happer_iobvge.wav'
  },
  
  {
    keyCode: 69,
    key: 'E',
    audioID: 'productive',
    src: 'https://res.cloudinary.com/dnv60ey6k/video/upload/v1613076443/fitter/more_productive_r3uefy.wav'
  },
  
  {
    keyCode: 65,
    key: 'A',
    audioID: 'comfortable',
    src: 'https://res.cloudinary.com/dnv60ey6k/video/upload/v1613076443/fitter/comfortable_tyfaqe.wav'
  },
  
  {
    keyCode: 83,
    key: 'S',
    audioID: 'drinking',
    src: 'https://res.cloudinary.com/dnv60ey6k/video/upload/v1613076443/fitter/drinking_p3tgxm.wav'
  },
  
  {
    keyCode: 68,
    key: 'D',
    audioID: 'exercize',
    src: 'https://res.cloudinary.com/dnv60ey6k/video/upload/v1613076443/fitter/exercise_wadd7n.wav'
  },
  
  {
    keyCode: 90,
    key: 'Z',
    audioID: 'employee',
    src: 'https://res.cloudinary.com/dnv60ey6k/video/upload/v1613076443/fitter/employee_sdigll.wav'
  },
  
  {
    keyCode: 88,
    key: 'X',
    audioID: 'ease',
    src: 'https://res.cloudinary.com/dnv60ey6k/video/upload/v1613076443/fitter/ease_yhl6ox.wav'
  },
  
  {
    keyCode: 67,
    key: 'C',
    audioID: 'eating',
    src: 'https://res.cloudinary.com/dnv60ey6k/video/upload/v1613076443/fitter/eating_well_zummbd.wav'
  }
 ] 
let display;

class DrumPad extends React.Component{
  constructor(props){
    super(props);
  }
  
  handleKeyPress = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === this.props.keyCode) {  this.props.play(this.props.value,this.props.audioID);
     display = this.props.audioID
      $('#display').text(display);
      }
  }
 
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  render() {
    return(
    <div className="drum-pad" id={this.props.audioID}
      onClick={() => this.props.play(this.props.value,this.props.audioID)} style={{background:"url(" + `https://res.cloudinary.com/dnv60ey6k/image/upload/v1613402778/fitter/my_x_hnow6b.jpg` + ")"}}>
          {this.props.value}
        <audio className='clip' id={this.props.value} src={this.props.src} type="audio/mpeg" />
    </div>
    );
  }
}

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  
  playSound = (val, audioID) => {
    const audio = document.getElementById(val);
    const button = document.getElementById(audioID);
    audio.currentTime = 0;
    audio.play();
   
    $('#display').text(audioID);
    
  }
 
  
  render(){
    return(
      <div>
        <div className="title"></div>
        <div id="display">press button</div>
        <div className='drum-machine' id='drum-machine'>
          {radioSounds.map((item) => {
            return <DrumPad play={this.playSound} audioID={item.audioID} 
            value={item.key} src={item.src} keyCode={item.keyCode}/>
          })}
        </div>
        <footer id='footer'>lth 2021</footer>
      </div>
    )    
  }
  
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
