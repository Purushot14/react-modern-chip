import React from "react";
import PropTypes from "prop-types";

import styles from './styles.module.css'
import {ReactComponent as CloseIcon} from "./assert/close.svg" 

export const defaultProps = {
    isFilled : true,
    isCloseable: true
};

export function ModernChip(props) {
    const {
        favicon,
        text,
        isFilled,
        isCloseable
    } = props;
    return (
    <span className = {`${styles.modernChip} ${props.isFilled ? styles.filled: styles.lite}`}>
        {favicon && <span className={styles.favicon}><img src={favicon}/></span>}
        <span>{text}</span>
        {isCloseable && <span className={styles.actionIcon}>{<CloseIcon height="2rem" width="2rem"/>}</span>}
    </span>
    )
}

ModernChip.propTypes = {
    children: PropTypes.any,
    favicon: PropTypes.any,
    text: PropTypes.string,
    isFilled: PropTypes.bool,
    isCloseable: PropTypes.bool
};
ModernChip.defaultProps = defaultProps;
