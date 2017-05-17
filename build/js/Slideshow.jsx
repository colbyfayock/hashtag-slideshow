import React from 'react';
import Carousel from 'nuka-carousel';
import Slide from './Slide';

export default class Slideshow extends React.Component {

    constructor(props) {
        
        super(props);

        this.state = {
            data: [],
        }

        this.getHashtag = this.getHashtag.bind(this);
        
    }

    componentDidMount() {

        this.getHashtag();

        this.interval = setInterval(this.getHashtag, 30000);

    }

    getHashtag() {

        var _that = this;

        fetch('./hashtag/output/hashtag.json').then(function(response) { 
            
            return response.json();

        }).then(function(response) {
            
            _that.setState({
                data: response.posts
            });

        });

    }

    render() {

        return (
            <CarouselSlider autoplay={true} autoplayInterval={5000} swiping={false} wrapAround={true} decorators={[]}>
                {
                    this.state.data.map(function(slide, i) {
                        return (
                            <Slide key={i} {...slide}></Slide>
                        );
                    })
                }
            </CarouselSlider>
        );

    }

}

class CarouselSlider extends Carousel {

    constructor(props) {
        
        super(props);

        this.handleMouseOver = function() {
            return;
        };

    }

}