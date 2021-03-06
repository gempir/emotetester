/**
 * This has a specific use case for writing to the contentDocument allowing for a separated scope
 *
 * There are probably other ways to do this with ShadowDom but this works well for my purposes
 * 
 * USAGE:
 * 
 * <CustomIframe html={<head><title>Doc Title</title></head><body>Hello React User</body>} />
 *
 */

import React, { Component } from 'react'

export default class CustomIframe extends Component {

    constructor() {
        super()

        this.iframe_ref = null

        this.writeHTML = this.writeHTML.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.html != this.props.html || prevProps.styles != this.props.styles) {
            this.writeHTML(this.iframe_ref)
        }
    }

    writeHTML(frame) {

        if (!frame) {
            return
        }

        this.iframe_ref = frame

        let doc = frame.contentDocument

        doc.open()
        doc.write(this.props.html);
        for (const style of this.props.styles ?? []) {
            doc.write(`<style>${style}</style>`);
        }
        doc.close()

        frame.style.height = `calc(100vh - 50px)`
    }

    render() {
        return (
            <iframe src='about:blank' scrolling='no' frameBorder='0' ref={this.writeHTML}></iframe>
        )
    }
}