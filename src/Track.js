import React from 'react';
import pure from 'recompose/pure';

export default pure(Track);

function Track({ track }) {
    return <li>
        <img src={track.cover} alt="album cover" /> { track.artist } – { track.title }
    </li>;
}
