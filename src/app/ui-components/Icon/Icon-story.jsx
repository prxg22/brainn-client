// libs
import React  from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text, number, select } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'

// lib components
import Container from '../Grid/Container'
import Row from '../Grid/Row'
import Column from '../Grid/Column'

import Icon from './Icon'

// custom story styles
import style from '../../styles/storybook/base.styl'

storiesOf('Icon', module)
    .add(
        'all',
        withInfo({
            propTablesExclude: [ Container, Row, Column ]
        })(
            () => {
                const groups = {
                    style: 'Style',
                    type: 'Type'
                }

                const sizeValue = select('Size', {
                    xs: 'xs',
                    sm: 'sm',
                    md: 'md',
                    lg: 'lg',
                    xl: 'xl',
                    xxl: 'xxl',
                    big: 'big',
                }, '', groups.size)

                return (
                    <Container>
                        <Row className="icon-settings" alignStretch>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="i-01"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">i-01</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="i-02"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">i-02</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="i-03"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">i-03</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="i-04"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">i-04</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="i-05"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">i-05</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="i-06"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">i-06</span>
                            </Column>
                        </Row>
                        <Row className="icon-settings" alignStretch>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="i-07"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">i-07</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="i-08"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">i-08</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="i-09"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">i-09</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="i-10"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">i-10</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="i-11"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">i-11</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="i-12"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">i-12</span>
                            </Column>
                        </Row>
                        <Row className="icon-settings" alignStretch>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="angle-down"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">angle-down</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="angle-left"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">angle-left</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="angle-right"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">angle-right</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="angle-up"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">angle-up</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="arrow-down"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">arrow-down</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="arrow-left"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">arrow-left</span>
                            </Column>
                        </Row>
                        <Row className="icon-settings" alignStretch>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="arrow-right"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">arrow-right</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="arrow-up"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">arrow-up</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="best-price"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">best-price</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="calendar"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">calendar</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="cart"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">cart</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="cart-empty"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">cart-empty</span>
                            </Column>
                        </Row>
                        <Row className="icon-settings" alignStretch>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="check"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">check</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="check-square"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">check-square</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="check-circle"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">check-circle</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="check-circle-unselect"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">check-circle-unselect</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="check-circle-outline"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">check-circle-outline</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="check-circle-outline-unselect"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">check-circle-outline-unselect</span>
                            </Column>
                        </Row>
                        <Row className="icon-settings" alignStretch>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="close"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">close</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="comments"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">comments</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="edit"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">edit</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="data"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">data</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="delete"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">delete</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="heart-empty"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">heart-empty</span>
                            </Column>
                        </Row>
                        <Row className="icon-settings" alignStretch>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="hand-pointer"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">hand-pointer</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="high-brightness"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">high-brightness</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="info"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">info</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="invoice"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">invoice</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="list"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">list</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="low-brightness"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">low-brightness</span>
                            </Column>
                        </Row>
                        <Row className="icon-settings" alignStretch>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="mail"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">mail</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="medal"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">medal</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="menu"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">menu</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="notification-badge"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">notification-badge</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="payments"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">payments</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="play"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">play</span>
                            </Column>
                        </Row>
                        <Row className="icon-settings" alignStretch>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="plus"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">plus</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="plus-circle"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">plus-circle</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="plus-circle-outline"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">plus-circle-outline</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="price"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">price</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="printiclub"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">printiclub</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="requests"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">requests</span>
                            </Column>
                        </Row>
                        <Row className="icon-settings" alignStretch>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="remove"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">remove</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="search"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">search</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="shipping-express"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">shipping-express</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="social-facebook"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">social-facebook</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="social-googleplus"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">social-googleplus</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="social-linkedin"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">social-linkedin</span>
                            </Column>
                        </Row>
                        <Row className="icon-settings" alignStretch>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="social-twitter"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">social-twitter</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="status"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">status</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="star"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">star</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="star-half"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">star-half</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="star-empty"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">star-empty</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="template-outline"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">template-outline</span>
                            </Column>
                        </Row>
                        <Row className="icon-settings" alignStretch>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="time"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">time</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="into-list"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">into-list</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="adobe-indesign"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">adobe-indesign</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="adobe-photoshop"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">adobe-photoshop</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="adobe-illustrator"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">adobe-illustrator</span>
                            </Column>
                            <Column cols={{ xs: 3, lg: 2 }}>
                                <Icon
                                    name="corel-draw"
                                    size={sizeValue}
                                />
                                <span className="icon-legend">corel-draw</span>
                            </Column>
                        </Row>
                    </Container>
                )
            }
        )
    )
