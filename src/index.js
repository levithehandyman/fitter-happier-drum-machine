import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const MEDIA_URL = 'https://res.cloudinary.com/dnv60ey6k/video/upload/fitter';
const RADIO_SOUNDS = [
  /**
   * Your `src` property in the objects below seem to share some common things.
   * They all point to the URL <https://res.cloudinary.com/dnv60ey6k/video/upload/v1613076443/>.
   * You could make your code more DRY by assigning 'https://res.cloudinary.com/dnv60ey6k/video/upload/'
   * to a variable:
   *
   * ```
   * const MEDIA_URL = 'https://res.cloudinary.com/blah/blah';
   * 
   * const RADIO_SOUNDS = [
   *   {
   *     ...other props...
   *     src: `${MEDIA_URL}/fitter_riupy7.wav` // pay careful attention to the forward-slash
   *   },
   *   ...other objects...
   * ]
   * ```
   * 
   * NOTE: The above uses string interpolation through JS "template literals"
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   * Template literals are really cool, I use them LITERALLY everywhere. Get it? I'll be
   * here all night.
   */
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
    // Just a quick note to be careful about leaving log statements in production code.
    // Ne'er-do-wells might spot things that reveal too much about how things work.
    // Doesn't apply here because there's not really much to exploit, but worth mentioning.
    console.log(e.keyCode);
    // For readability, you should have the contents of an `if` statement on a new line.
    // Also, it's good to pay attention to consistent indentation (either 2 or 4 spaces,
    // but never both). See the comments below for examples.
    if (e.keyCode === this.props.keyCode) {  this.props.play(this.props.value,this.props.audioID);
     // the following line should have an additional space
     display = this.props.audioID
      $('#display').text(display);
      // this closing brace should line up with the opening `if`
      }
  }
 
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  render() {
    return(
    /**
     * You could make this statement more readable by having each attribute on
     * it's own line. Example:
     * <div
     *   className="drum-pad"
     *   id={this.props.audioID}
     *   ...the rest of the attributes...
     * >
     *  ...element contents...
     * </div>
     */
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
  
  // Composition note: it's good to avoid using variable names like `val`, or `obj`.
  // They are abbreviations and might save a little time, but hard to understand.
  // For instance, `val` is obviously used for something, but it takes alot of thinking to
  // understand what. In this case, `val` is the ID of the HTML element you want to
  // retrieve from the document, so something like `elementId` might be a better
  // variable name.
  playSound = (val, audioID) => {
    const audio = document.getElementById(val);

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
          {/* nice re-use of components! */}
          {RADIO_SOUNDS.map((item) => {
            // nice use of a closure to play the sound :-)
            return <DrumPad play={this.playSound} audioID={item.audioID} 
            value={item.key} src={item.src} keyCode={item.keyCode}/>
          })}
        </div>
        {/* extra credit: find out how to use JS to display the year auto-magically */}
        <footer id='footer'>lth 2021</footer>
      </div>
    )    
  }
  
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
