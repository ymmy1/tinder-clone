import React from 'react'

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

import './SwipeButtons.css';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <div className="swipeButtons__container">
                <IconButton className="swipeButtons__repeat">
                    <ReplayIcon fontSize="large" />
                </IconButton>
                <IconButton
                    className="swipeButtons__left">
                    <CloseIcon fontSize="large" />
                </IconButton>
                <IconButton className="swipeButtons__star">
                    <StarIcon fontSize="large" />
                </IconButton>
                <IconButton className="swipeButtons__right">
                    <FavoriteIcon fontSize="large" />
                </IconButton>
                <IconButton className="swipeButtons__lightning">
                    <FlashOnIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    )
}

export default SwipeButtons
