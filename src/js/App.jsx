import React, { Component } from 'react';
import ChatLight from "./twitch/ChatLight.html";
import CustomIframe from './CustomIframe';

export default class App extends Component {
	replacementPhrase = "https://static-cdn.jtvnw.net/emoticons/v1/41/1.0";

	state = {
		emoteUrl: this.replacementPhrase
	}

	render() {
		console.log(this.state.emoteUrl);
		return (
			<div className="Wrapper">
				<form className="Upload" onSubmit={this.handleSubmit} action="">
					<label>Your emote image url</label><br />
					<input type="text" name="emoteUrl" placeholder="https://i.nuuls.com/E7e0v.png" />
					<button>Update</button>
				</form>
				<CustomIframe html={ChatLight.replace(this.replacementPhrase, this.state.emoteUrl)} />
				<CustomIframe html={ChatLight.replace(this.replacementPhrase, this.state.emoteUrl)} />
			</div>
		);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);

		this.setState({
			emoteUrl: data.get("emoteUrl"),
		});
	}
}