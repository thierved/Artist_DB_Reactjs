import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {

    const list = ({allArtists}) => {
        if (allArtists) {
            return allArtists.map((artist) => {

                const style = {
                    background: `url('/images/covers/${artist.cover}.jpg') no-repeat`
                }

                return (
                    <Link key={artist.id} to={`/artist/${artist.id}`} 
                        className='artist' 
                        style = {style}>
                        
                        <div>{artist.name}</div>

                    </Link>
                );
            });   
        }        
    }
    
    return (
        <div className='artist_list'>
            <h4>Browse the artists</h4>
            {list(props)}
        </div>
    )

}

export default ArtistList;