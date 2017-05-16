const app = "I don't do much.";

class ToggleButton extends React.Component {
  constructor() {
    super();
 
    this.state = {
      isEnabled: false
    };
  }
 
  render() {
    return (
      <div className="toggle-button">I am toggled {this.state.isEnabled ? 'on' : 'off'}.</div>
    );
  }
}
