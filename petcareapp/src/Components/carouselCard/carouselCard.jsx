import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const renderCenterLeftControls = ({ previousDisabled, previousSlide }) => (
    <IconButton
        className="btn_action"
        disabled={previousDisabled}
        onClick={previousSlide}
        aria-label="Go to previous slide"
    >
        <ArrowBackIosIcon className="icon_action" sx={{ fontSize: '36px' }} />
    </IconButton>
);

export const renderCenterRightControls = ({ nextDisabled, nextSlide }) => (
    <IconButton className="btn_action" disabled={nextDisabled} onClick={nextSlide} aria-label="Go to next slide">
        <ArrowForwardIosIcon className="icon_action" sx={{ fontSize: '36px' }} />
    </IconButton>
);
