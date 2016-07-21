import React, { PropTypes } from 'react';

class StarRating extends React.Component {
    constructor(props, context) {
        super(props, context);
        if(window.sessionStorage.getItem(`rating-${this.props.videoId}`)){
            this.state = {
                rating: window.sessionStorage.getItem(`rating-${this.props.videoId}`),
                clicked: true
            };
        } else {
            this.state = {
                rating: this.calculateRating(this.props.ratings),
                clicked: false
            };
        }

        this.mouseStarEvent = this.mouseStarEvent.bind(this);
        this.mouseStarLeave = this.mouseStarLeave.bind(this);
        this.onClickStar = this.onClickStar.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(window.sessionStorage.getItem(`rating-${this.props.videoId}`)){
            this.setState({
                rating: window.sessionStorage.getItem(`rating-${this.props.videoId}`),
                clicked: true
            });
        } else {
            this.setState({
                rating: this.calculateRating(this.props.ratings),
                clicked: false
            });
        }

    }

    calculateRating(ratings){
        let ratingSum = 0;
        if(ratings.length) {
            ratingSum = ratings.reduce(function(before, actual){
                return before + actual;
            });
            return Math.floor(ratingSum/ratings.length);
        }
        return ratingSum;
    }

    mouseStarEvent(e){
        if(!this.state.clicked) {
            let element = e.target;
            this.setState({
                rating: (parseInt(element.getAttribute('data-starPosition'), 10) + 1)
            });
        }
    }

    mouseStarLeave(e){
        if(!this.state.clicked) {
            this.setState({
                rating: this.calculateRating(this.props.ratings)
            });
        }
    }

    onClickStar(e){
        e.preventDefault();
        if(!this.state.clicked) {
            let element = e.target;
            let rating = (parseInt(element.getAttribute('data-starPosition'), 10) + 1);
            this.setState({
                rating: rating,
                clicked: true
            });
            window.sessionStorage.setItem(`rating-${this.props.videoId}`, rating);
            this.props.onClickStar(this.props.videoId, rating);

        }
    }

    render(){
        const {rating, clicked} = this.state;
        let ratingHtml = [];
        for(let i = 0; i<rating; i++){
            ratingHtml.push(<i key={i} onClick={this.onClickStar} onMouseOver={this.mouseStarEvent} data-starPosition={i} className="glyphicon glyphicon-star" />);
        }
        for(let i = rating; i<5; i++){
            ratingHtml.push(<i key={i} onClick={this.onClickStar} onMouseOver={this.mouseStarEvent} data-starPosition={i} className="glyphicon glyphicon-star-empty" />);
        }
        return (
            <div className="col-sm-12">
                <span onMouseOut={!this.state.clicked ? this.mouseStarLeave : ''} className="rating">
                    {ratingHtml}
                </span>
                <span className="clicked">
                    {clicked ? 'Already rated :)' : ''}
                </span>
            </div>
        );
    }
}

StarRating.propTypes = {
    ratings: PropTypes.array.isRequired,
    onClickStar: PropTypes.func.isRequired,
    videoId: PropTypes.string.isRequired
};

export default StarRating;
