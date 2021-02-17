import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

/**
 * Hey, your app is pretty nice! The code is D.R.Y., and work well, but you could give
 * some attention to your code compositions habits. Just a few overall notes:
 *
 * You can have code, but if it's messy, it can be hard to understand, and hard to read.
 * In clean code, consistency is key. Some examples:
 * 
 * 1. In your code some lines end with a `;` while others do not. Either is correct,
 * but both can be construed as "messy." (Habitually ending lines with a semicolon can
 * protect from some weird bugs, so I usually use them). For more on semicolons in JS
 * see: <https://medium.com/better-programming/the-use-of-the-javascript-semicolon-843fd5e94d0e#:~:text=Semicolons%20are%20an%20essential%20part,other%20parts%20of%20the%20code.>
 *
 * 2. Some variables, class methods, and functions have a single line after them, some do
 * not, and some have more than one line after them. For example in the `App` class,
 * there is 1 line after the `constructor`, 2 lines after the `playSound` function.
 * Usually a single line after each class member makes for better readability. Kind of a
 * "visual rhythm" if you will.
 *
 * 3. Some strings or React Element attribute values have `'` (single quotes) surrounding
 * them, some have `"` (double-quotes). Either is correct, but like #1 and #2 above,
 * but having a mix of both is inconsistent.
 *
 * Why all the piddly little nitpicks? When you write code, you are always writing it
 * for someone else, even if no one else besides you will ever touch it. The other
 * person is usually your future self. The more consistent and readable your code is,
 * the easier it will be to maintain or extend later!
 *
 * The above notes are comments related to things that are fairly subjective, as in
 * developers will debate about which thing is "better," but the standard itself is
 * less important than just picking one and sticking with it.
 *
 * Tip: There is a library called Prettier I like to use which gets installed as part of
 * the developer tools on your local machine, and just fixes all these little things
 * automatically, which is nice.
 */

// In some JS best-practice guides, you might find a preference for naming variables with
// underscore-delimited, upper-case names (like so: `UPPER_CASE`), whenever the variable
// exists at the global scope, like this one does here.
//
// I'd suggest naming this RADIO_SOUNDS. This has a readability benefit of the reader
// instantly knowing that this is a global variable simply by looking at it.
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
    // Seems like this one isn't up in cloudinary, it's a 404
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
