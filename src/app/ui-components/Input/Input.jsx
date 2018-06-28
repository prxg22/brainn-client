import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './Input.styl'

class Input extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
        getRef: PropTypes.func,
    }

    static defaultProps = {
        label: '',
        getRef: null,
    }

    render = () => {
        const {
            label,
            name,
            getRef,
            ...others
        } = this.props

        return (
            <div className={style.input__container}>
                <label className={style.input__label} htmlFor={`i${name}`}>{label}</label>
                <input className={style.input} ref={e => getRef && getRef(e)} name={name} id={`i${name}`} {...others} />
            </div>
        )
    }
}

export default Input
