import React from 'react';
import Carousel from 'nuka-carousel';
import Slide from './Slide';

export default class Slideshow extends React.Component {

    constructor(props) {
        
        super(props);

        this.state = {
            data: []
        }
        
    }

    componentDidMount() {

        var _that = this;

        fetch('./hashtag.json').then(function(response) { 
            
            return response.json();

        }).then(function(response) {
            
            _that.setState({
                data: response.posts
            });

        });

    }

    render() {

        return (
            <Carousel autoplay={true} wrapAround={true}>
                {
                    this.state.data.map(function(slide, i) {
                        return (
                            <Slide key={i} {...slide}></Slide>
                        );
                    })
                }
            </Carousel>
        );

    }

}