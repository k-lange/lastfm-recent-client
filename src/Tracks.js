import React from 'react';
import Track from './Track';
import './Tracks.css';

export default function Tracks({ tracks }) {
    return (
        <ul className="tracks">
            { tracks.map(track => <Track key={track.date} track={track} /> ) }
        </ul>
    );
}
