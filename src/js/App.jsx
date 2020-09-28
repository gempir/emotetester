import React, { useState } from 'react';
import ChatDark from "./twitch/ChatDark.html";
import ChatLight from "./twitch/ChatLight.html";
import CustomIframe from './CustomIframe';

const replacementPhrase = "data:image/png;base64,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";

export default () => {
	const url = new URL(window.location.href)

	const [emoteUrl, setEmoteUrl] = useState(url.searchParams.get("emoteUrl")?.replace('"', "'") ?? replacementPhrase);
	const [resize, setResize] = useState(url.searchParams.get("resize") === "1");

	const chatDark = ChatDark.replace(/srcset="[^"]+"/g, "");
	const chatLight = ChatLight.replace(/srcset="[^"]+"/g, "");

	const styles = [];
	if (resize) {
		styles.push(`.chat-image { max-width: 28px; max-height: 28px; }`);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);

		if (emoteUrl !== data.get("emoteUrl") || resize !== data.get("resize")) {
			url.searchParams.set("emoteUrl", data.get("emoteUrl"))
			url.searchParams.set("resize", data.get("resize") ? "1" : "0");

			history.pushState({}, "emotetester", url.toString());
		}

		setEmoteUrl(data.get("emoteUrl"));
		setResize(Boolean(data.get("resize")));

	}

	return (
		<div className="Wrapper">
			<form className="Upload" onSubmit={handleSubmit} action="">
				<label>Your emote image url</label><br />
				<input type="text" name="emoteUrl" placeholder="https://i.nuuls.com/E7e0v.png" defaultValue={replacementPhrase !== emoteUrl ? emoteUrl : null} required/>
				<label><input type="checkbox" name="resize" defaultValue={resize} /> resize</label>
				<button>Update</button>
			</form>
			<CustomIframe html={chatDark.replace(replacementPhrase, emoteUrl)} styles={styles} />
			<CustomIframe html={chatLight.replace(replacementPhrase, emoteUrl)} styles={styles} />
		</div>
	);
}