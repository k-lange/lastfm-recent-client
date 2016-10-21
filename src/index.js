import React from 'react';
import ReactDOM from 'react-dom';
import socketIo from 'socket.io-client';
import { unionBy, flow, sortBy, takeRight, reverse } from 'lodash/fp';
import Tracks from './Tracks';
import './index.css';

const socket = socketIo(process.env.REACT_APP_WS_HOST);
const domNode = document.getElementById('root');
let tracks = [];
let nowPlaying;

socket.on('tracks', newTracks => {
    tracks = flow(
        unionBy('date')(tracks),
        sortBy('date'),
        takeRight(50),
        reverse
    )(newTracks);

    render();
});

socket.on('now', newNowPlaying => {
    nowPlaying = newNowPlaying;

    render();
});

function render() {
    ReactDOM.render(
        <Tracks tracks={tracks} nowPlaying={nowPlaying} />,
        domNode
    );
}
