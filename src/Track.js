import React from 'react';
import pure from 'recompose/pure';
import './Track.css';

export default pure(Track);

function Track({ track }) {
    return (
        <li className="track">
            <img src={track.cover} alt="album cover" className="cover" />
            <div>
                <div className="title">{ track.title }</div>
                <div className="subtitle">{ track.artist } – { track.album }</div>
            </div>
        </li>
    );
}
