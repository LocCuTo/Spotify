import React, { useEffect, useState } from 'react';
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from 'react-icons/fa';
import '../styles/LeftSidebar.css';
import MusicPlayer from './MusicPlayer';
import { Songs } from './Songs';

const AudioList = () => {
    const [songs, setSongs] = useState(Songs);
    const [song, setSong] = useState(Songs[0].song);
    const [image, setImage] = useState(Songs[0].imgSrc);

    useEffect(() => {
        const allSongs = document.querySelectorAll('.songs');
        function changeActive() {
            allSongs.forEach((n) => n.classList.remove('active'));
            this.classList.add('active');
        }

        allSongs.forEach((n) => n.addEventListener('click', changeActive));
    }, []);

    const changeFavourite = (id) => {
        Songs.forEach((song) => {
            if (song.id === id) {
                song.favourite = !song.favourite;
            }
        });
        setSongs([...Songs]);
    };

    const setMainSong = (songSrc, imgSrc) => {
        setSong(songSrc);
        setImage(imgSrc);
    };

    return (
        <div className="AudioList">
            <h2 className="title">
                The list <span>{songs.length} songs</span>
            </h2>

            <div className="songsContainer">
                {songs &&
                    songs.map((song, index) => (
                        <div className="songs" key={song?.id} onClick={() => setMainSong(song.song, song.imgSrc)}>
                            <div className="count">
                                <p>{`${index + 1}`}</p>
                            </div>
                            <div className="song">
                                <div className="imgBox">
                                    <img src={song?.imgSrc} alt="" />
                                </div>
                                <div className="section">
                                    <p className="songName">
                                        {song?.songName} <span className="songSpan">{song?.artist}</span>
                                    </p>

                                    <div className="hits">
                                        <p className="hit">
                                            <i>
                                                <FaHeadphones />
                                            </i>
                                            95,490,102
                                        </p>

                                        <p className="duration">
                                            <i>
                                                <FaRegClock />
                                            </i>
                                            03:04
                                        </p>
                                        <div className="favourite" onClick={() => changeFavourite(song?.id)}>
                                            {song.favourite ? (
                                                <i>
                                                    <FaHeart />
                                                </i>
                                            ) : (
                                                <i>
                                                    <FaRegHeart />
                                                </i>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            <MusicPlayer song={song} imgSrc={image} />
        </div>
    );
};

export default AudioList;
