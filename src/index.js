import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const MEDIA_URL = 'https://res.cloudinary.com/dnv60ey6k/video/upload/fitter';
const RADIO_SOUNDS = [
 
  {
    keyCode: 81,
    key: 'Q',
    audioID: 'fitter',
    src: `${MEDIA_URL}/fitter_riupy7.wav`
  },
 
  {
    keyCode: 87,
    key: 'W',
    audioID: 'happier',
    src: `${MEDIA_URL}/happer_iobvge.wav`
  },
  
  {
    keyCode: 69,
    key: 'E',
    audioID: 'productive',
    src: `${MEDIA_URL}/more_productive_r3uefy.wav`
  },
  
  {
    keyCode: 65,
    key: 'A',
    audioID: 'comfortable',
    src: `${MEDIA_URL}/comfortable_tyfaqe.wav`
  },
  
  {
    keyCode: 83,
    key: 'S',
    audioID: 'drinking',
    src: `${MEDIA_URL}/drinking_p3tgxm.wav`
  },
  
  {
    keyCode: 68,
    key: 'D',
    audioID: 'exercize',
    src: `${MEDIA_URL}/exercise_wadd7n.wav`
  },
  
  {
    keyCode: 90,
    key: 'Z',
    audioID: 'employee',
    src: `${MEDIA_URL}/employee_sdigll.wav`
  },
  
  {
    keyCode: 88,
    key: 'X',
    audioID: 'ease',
    src: `${MEDIA_URL}/ease_yhl6ox.wav`
  },
  
  {
    keyCode: 67,
    key: 'C',
    audioID: 'eating',
    src: `${MEDIA_URL}/eating_well_zummbd.wav`
  }
 ] 
let display;

class DrumPad extends React.Component{
  constructor(props){
    super(props);
  }
  
  handleKeyPress = (e) => {
   
    if (e.keyCode === this.props.keyCode) {  
      this.props.play(this.props.value,this.props.audioID);
     
      display = this.props.audioID
      $('#display').text(display);
    }
  }
 
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  render() {
    return(
    
    <div 
      className="drum-pad" 
      id={this.props.audioID}
      onClick={() => this.props.play(this.props.value,this.props.audioID)} 
      style={{background:"url(" + `https://res.cloudinary.com/dnv60ey6k/image/upload/v1613402778/fitter/my_x_hnow6b.jpg` + ")"}}>
          {this.props.value}
        <audio 
          className='clip' 
          id={this.props.value} 
          src={this.props.src} 
          type="audio/mpeg" />
    </div>
    );
  }
}

class App extends React.Component{
  constructor(props) {
    super(props);
  }
 
  playSound = (elementID, audioID) => {
    const audio = document.getElementById(elementID);

    audio.currentTime = 0;
    audio.play();
   
    $('#display').text(audioID);  
  }
 
  render(){
    return(
      <div>
        <div className="title"></div>
        <div id="display">press button</div>
        <div className='tooltip'>
           <span class="tooltiptext">
             Q-fitter <br />
             W-happier <br />
             E-productive <br />
             A-comfortable <br />
             S-drinking <br />
             D-exercise <br />
             Z-employee <br />
             X-ease <br />
             C-eating <br />
          </span>  
          <div className='drum-machine' id='drum-machine'>
            {RADIO_SOUNDS.map((item) => {
              return <DrumPad play={this.playSound} audioID={item.audioID} 
              value={item.key} src={item.src} keyCode={item.keyCode}/>
            })}
          </div>
        </div>
        <footer id='footer'><p>lth {new Date().getFullYear()}</p></footer>
      </div>
    )    
  }
  
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
