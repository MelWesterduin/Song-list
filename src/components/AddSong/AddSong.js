import { useState } from "react";
import { GENRE_SELECTOR, STAR_SELECTOR } from "../../constants/selectors";
import Selector from "../Selector/Selector";

import './AddSong.css';

const AddSong = ({onSubmit}) => {
    const [title, setTitle] = useState();
    const [artist, setArtist] = useState();
    const [genre, setGenre] = useState();
    const [stars, setStars] = useState();

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit(title, artist, genre, stars);
            }} > 
            <input placeholder='Title' onChange={(e) => setTitle(e.target.value)} type='text'></input>
            <input placeholder='Artist' onChange={(e) => setArtist(e.target.value)} type='text'></input>
            <Selector onChange={setGenre} selector={GENRE_SELECTOR}/>
            <Selector onChange={setStars} selector={STAR_SELECTOR}/>
            <button className="add-button">Add song</button>
        </form>
    );
};

export default AddSong;