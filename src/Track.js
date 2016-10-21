import React from 'react';
import pure from 'recompose/pure';
import TimeAgo from 'react-timeago';
import './Track.css';

export default pure(Track);

function Track({ track }) {
    return (
        <li className="track">
            <div className="background" style={{ backgroundImage: `url(${track.cover})` }} />
            <img className="cover" src={track.cover} alt="album cover" />
            <div className="meta">
                <div className="title shorten">{ track.title }</div>
                <div className="subtitle">
                    <div className="shorten">
                        <span className="artist">{ track.artist }</span> – <span className="album">{ track.album }</span>
                    </div>
                    <div className="date"><TimeAgo date={track.date} /></div>
                </div>
            </div>
        </li>
    );
}
