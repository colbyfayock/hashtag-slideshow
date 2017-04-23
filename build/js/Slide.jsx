import React from 'react';

export default class Slide extends React.Component {

    slideMedia() {
        return (
            <div className="slide-media">
                <div className="slide-media-headline">
                    <h2><span><strong>{ this.props.screen_name }</strong> said</span> <strong>"{ this.props.text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '') }"</strong> on <strong>{ this.props.source }</strong></h2>
                </div>
                <img src={ this.props.media[0].media_url }/>
                <span className="slide-media-background" style={{ backgroundImage:  'url(' + this.props.media[0].media_url + ')'  }}></span>
            </div>
        );
    }

    slideQuote() {
        return (
            <div className="slide-quote">
                <h2>
                    <span><strong>{ this.props.screen_name }</strong> said</span>
                    <span><strong>"{ this.props.text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '') }"</strong></span>
                    <span>on <strong>{ this.props.source }</strong></span>
                </h2>
            </div>
        );
    }

    render() {

        return (
            <div className="slide">
                { this.props.media ? this.slideMedia() : this.slideQuote() }
            </div>
        );

    }

}