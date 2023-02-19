import React from 'react';
import MusicItem from "src/shared/ui/music-item";

const FoundMusic = ({className}) => {
    return (
        <>
            <ul className={className}>
                <MusicItem name={'name'} author={'author'} number={1} btnAdd={true}/>
                <MusicItem name={'name'} author={'author'} number={1} btnAdd={true}/>
                <MusicItem name={'name'} author={'author'} number={1} btnAdd={true}/>
                <MusicItem name={'name'} author={'author'} number={1} btnAdd={true}/>
                <MusicItem name={'name'} author={'author'} number={1} btnAdd={true}/>
            </ul>
        </>
    );
};

export default FoundMusic;