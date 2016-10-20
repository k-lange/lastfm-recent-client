import React from 'react';
import Track from './Track';

export default function Tracks({ tracks }) {
    return (
        <ul>
            { tracks.map(track => <Track key={track.date} track={track} /> ) }
        </ul>
    );
}
