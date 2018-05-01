import React, {Component} from 'react';

import Banner from '../components/banner';
import ArtistList from './artist_list';

const URL_ARTISTS = 'http://localhost:3001/artists';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist: ''
        }
    }

    componentDidMount() {
        fetch(URL_ARTISTS, {
            method:'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                artist:json
            })
        });
    }

    render() {
        return (
            <div>
                <Banner/>
                <ArtistList allArtists={this.state.artist}/>
            </div>
        )
    }
}

export default Home;