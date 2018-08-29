import React, { Component } from 'react';
import './App.css';
import  UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    userOutputs: [
      { quote: 'Tilde sustainable gastropub blue bottle. Humblebrag chillwave lo-fi seitan synth pop-up squid migas pour-over. Church-key authentic craft beer, cornhole chicharrones edison bulb raw denim vaporware photo booth microdosing gentrify la croix. Selvage waistcoat bespoke, raclette viral heirloom activated charcoal craft beer typewriter franzen schlitz brunch church-key. Banjo vice church-key bushwick small batch jean shorts.', author: 'Chuck Palahinuk' },
      { quote: 'Pour-over gochujang thundercats literally, green juice humblebrag lumbersexual succulents meh godard. Ennui art party freegan hammock hexagon mixtape before they sold out copper mug meh glossier. Plaid seitan woke edison bulb poutine cornhole. Keytar intelligentsia next level listicle YOLO, tofu vape umami blog craft beer. Offal intelligentsia taxidermy put a bird on it ugh.', author: 'W Somerset Maugham' },
      { quote: '8-bit tote bag squid yr cred cold-pressed. Tote bag tbh lo-fi authentic health goth, butcher twee readymade put a bird on it ramps skateboard scenester retro fashion axe meh. Tilde schlitz tote bag polaroid vegan slow-carb godard aesthetic. Chicharrones salvia organic, banjo gochujang synth forage pickled pinterest palo santo portland small batch adaptogen gentrify.', author: 'John Krakauer' },
      {quote: 'Godard kogi iPhone la croix disrupt cardigan helvetica readymade forage adaptogen jianbing salvia yuccie. Tote bag photo booth farm-to-table drinking vinegar pickled raw denim. Normcore man bun cardigan flexitarian, vegan la croix polaroid direct trade sartorial. Pour-over jean shorts poke jianbing everyday carry. Retro affogato twee succulents, skateboard fashion axe hot chicken subway tile freegan normcore scenester kitsch raclette.', author: 'Gillian Flynn' }
    ]
  };

  inputHandler = (event) => {
    this.setState({
      userOutputs: [
        { quote: 'Tilde sustainable gastropub blue bottle. Humblebrag chillwave lo-fi seitan synth pop-up squid migas pour-over. Church-key authentic craft beer, cornhole chicharrones edison bulb raw denim vaporware photo booth microdosing gentrify la croix. Selvage waistcoat bespoke, raclette viral heirloom activated charcoal craft beer typewriter franzen schlitz brunch church-key. Banjo vice church-key bushwick small batch jean shorts.', author: 'Chuck Palahinuk' },
        { quote: 'Lorem ipsum dolor amet sustainable ugh bicycle rights heirloom bespoke, trust fund semiotics deep v fam. Cloud bread gastropub iPhone brooklyn church-key shoreditch 8-bit jianbing letterpress hella. Neutra street art organic health goth, bespoke freegan lumbersexual. Dreamcatcher austin gochujang, chicharrones crucifix snackwave quinoa pinterest bushwick. Prism tumblr thundercats pug, polaroid stumptown drinking vinegar fam sustainable PBR&B kombucha aesthetic. Umami pitchfork XOXO chicharrones fingerstache sartorial jianbing venmo lomo. Ramps live-edge af PBR&B.', author: event.target.value },
        { quote: '8-bit tote bag squid yr cred cold-pressed. Tote bag tbh lo-fi authentic health goth, butcher twee readymade put a bird on it ramps skateboard scenester retro fashion axe meh. Tilde schlitz tote bag polaroid vegan slow-carb godard aesthetic. Chicharrones salvia organic, banjo gochujang synth forage pickled pinterest palo santo portland small batch adaptogen gentrify.', author: 'John Krakauer' },
        { quote: 'Lorem ipsum dolor amet raw denim gochujang hoodie typewriter air plant tumblr hexagon skateboard PBR&B four dollar toast iceland fixie you probably haven\'t heard of them small batch gluten-free.Pabst fashion axe williamsburg hoodie deep v vaporware fam occupy gentrify stumptown plaid.Kogi chartreuse kickstarter, listicle leggings narwhal bicycle rights affogato normcore poke bitters.Tousled la croix selfies intelligentsia viral truffaut air plant, VHS cardigan thundercats swag kinfolk vice neutra.Deep v man bun keffiyeh bushwick prism, readymade trust fund chartreuse hot chicken cloud bread post-ironic raw denim hammock.Bespoke put a bird on it cold - pressed sartorial fingerstache poutine vaporware unicorn typewriter tumblr.Leggings pok pok hella tote bag.', author: 'Gillian Flynn' }
      ]
    })
  }
  
  render() {
    const style = {
      textAlign: 'center'
    }
    return (
      <div className="App" style={ style }>
        <UserOutput 
          author={ this.state.userOutputs[0].author }
          quote={ this.state.userOutputs[0].quote } >
        </UserOutput>
        <UserOutput 
          author={ this.state.userOutputs[1].author }
          quote={ this.state.userOutputs[1].quote } >
        </UserOutput>
        <UserOutput 
          author={ this.state.userOutputs[2].author }
          quote={ this.state.userOutputs[2].quote } >
        </UserOutput>
        <UserOutput 
          author={ this.state.userOutputs[3].author }
          quote={ this.state.userOutputs[3].quote } >
        </UserOutput>
        <UserInput 
          name={ this.state.userOutputs[1].author } 
          changed={ this.inputHandler } >
        </UserInput>

      </div>
    );
  }
}

export default App;
