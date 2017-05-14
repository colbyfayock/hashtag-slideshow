import React from 'react';
import Interweave from 'interweave';
import HashtagMatcher from 'interweave/matchers/Hashtag';

export default class Slide extends React.Component {

    render() {

        var slide_class = 'slide',
            slide_contents = [];

        if ( this.props.media && this.props.media[0] && this.props.media[0].media_url ) {
            slide_class += ' slide-media';
            slide_contents.push(<SlideImage key={'image'} url={this.props.media[0].media_url}></SlideImage>);
        } else {
            slide_class += ' slide-quote';
        }

        slide_contents.push(<SlideDetails key={'details'} {...this.props}></SlideDetails>);

        return (
            <div className={slide_class}>
                {slide_contents}
            </div>
        );

    }

}

class SlideImage extends React.Component {

    render() {

        return (
            <img className="slide-image" src={ this.props.url }/>
        );

    }

}

class SlideDetails extends React.Component {

    parseText(string) {
        
        if ( !string || typeof string !== 'string' ) return string;

        var parsed = string.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');

        if ( parsed.indexOf('#') !== -1 ) {
            parsed = string.replace(/(^|\s)(#[a-z\d-]+)/ig, "$1<span class='hash_tag'>$2</span>");
        }

        return (
            <Interweave
                content={parsed}
                matchers={[new HashtagMatcher('hashtag')]}
                />
        );

    }

    getIcon(source) {

        var icons = {
            instagram: 'fa-instagram',
            twitter: 'fa-twitter'
        }

        return icons[source];

    }

    render() {

        return (
            <div className="slide-details">
                <h2 className="slide-headline">
                    { this.parseText(this.props.text) }
                </h2>
                <p className="slide-author">
                    <i className={ 'fa ' + this.getIcon(this.props.source) }></i>
                    { this.props.screen_name }
                </p>
                <p>
                </p>
            </div>
        );

    }

}