import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './Input.styl'

class Input extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
        className: PropTypes.string,
        getRef: PropTypes.func,
    }

    static defaultProps = {
        label: '',
        className: '',
        getRef: null,
    }

    render = () => {
        const {
            label,
            name,
            getRef,
            className,
            ...others
        } = this.props

        const classes = classnames(
            style.input,
            className,
        )

        return (
            <div className={style.input__container}>
                <label className={style.input__label} htmlFor={`i${name}`}>{label}</label>
                <input className={classes} ref={e => getRef && getRef(e)} name={name} id={`i${name}`} {...others} />
            </div>
        )
    }
}

export default Input
