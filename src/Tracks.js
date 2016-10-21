import React from 'react';
import Track from './Track';
import './Tracks.css';

export default function Tracks({ tracks, nowPlaying }) {
    return (
        <ul className="tracks">
            { nowPlaying && <Track track={nowPlaying} /> }
            { tracks.map(track => <Track key={track.date} track={track} /> ) }
        </ul>
    );
}
