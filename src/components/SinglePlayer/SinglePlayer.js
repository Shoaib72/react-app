import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({ player, cart, setCart }) => {
    const { strNationality, strPlayer, strDescriptionEN, strCutout, idPlayer } = player;
    const handleAddToCart = () => {
        const info = {
            strNationality,
            strPlayer,
            strDescriptionEN,
            strCutout,
            idPlayer,
            price: 200,
        };
        if (cart) {
            const newPlayer = [...cart, info];
            setCart(newPlayer);
        }
        // console.log(info);


    }
    const handleBookmark = () => {
        const info = {
            strNationality,
            strPlayer,
            strDescriptionEN,
            strCutout,
            idPlayer,
            price: 200,
            bookmark: "true",
        };
        const prevBookmark = localStorage.getItem("bookmark");
        const oldBookmark = JSON.parse(prevBookmark);
        if (oldBookmark) {
            const isExist = oldBookmark.find((p) => p.idPlayer === idPlayer)
            console.log(isExist);
            if (isExist) {
                alert("Already Bookmarked!")
                return;
            }
            else {
                localStorage.setItem("bookmark", JSON.stringify([...oldBookmark, info]));
            }

        }
        else {
            localStorage.setItem("bookmark", JSON.stringify([info]));
        }
    }
    return (
        <div className='card'>
            <img className='player-img' src={strCutout} alt="" />
            <h5>{strPlayer}</h5>
            <h6>{strNationality}</h6>
            <p>{strDescriptionEN ? strDescriptionEN?.slice(0, 60) : 'lhjscvahsvchjavcjhasdvs'}</p>
            <button className='card-btn'>Details</button>
            <button onClick={handleAddToCart} className='card-btn'>Add to cart</button>
            <button onClick={handleBookmark} className='card-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;