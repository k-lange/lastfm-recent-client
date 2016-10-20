import React from 'react';

export default function Track({ track }) {
    return <li>
        <img src={track.cover} alt="album cover" /> { track.artist } – { track.title }
    </li>;
}
