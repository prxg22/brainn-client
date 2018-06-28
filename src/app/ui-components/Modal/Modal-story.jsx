// libs
import React, { Component }  from 'react'
import { storiesOf, forceReRender } from '@storybook/react'
import { withKnobs, boolean, text, number, select } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import { Store, State } from '@sambego/storybook-state'

// lib components
import Container from '../Grid/Container'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import Button from '../Button'
import Link from '../Link'
import Box from '../Box'

import Modal from './Modal'

// custom story styles
import style from '../../styles/storybook/base.styl'

const store = new Store({
    isOpen: false
})

storiesOf('Modal', module)
    .add(
        'default',
        withInfo({
            propTablesExclude: [ Container, Row, Column, Button, Link, Box, State ]
        })(
            () => (
                <Row>
                    <Column cols={{ xs: 12 }}>
                        <Button onClick={() => store.set({ isOpen: true })}>
                            Open
                        </Button>
                        <State store={store}>
                            <Modal
                                isOpen={store.get('isOpen')}
                                onClose={() => { store.set({ isOpen: false }) }}
                            >
                                <Row>
                                    <Column style={{ textAlign: 'center' }} noGutter>
                                        <img
                                            src="images/modal-image.jpg"
                                            width="267"
                                            height="200"
                                        />
                                    </Column>
                                    <Column style={{ marginBottom: 32 }} noGutter>
                                        <h6 align="center" style={{ padding: '0 40px' }}>
                                            Aqui na Printi você personaliza e descobre o preço dos seus produtos direto pelo site:
                                        </h6>
                                    </Column>
                                    <Column style={{ marginBottom: 24 }} noGutter>
                                        <Row>
                                            <Column align="center" cols={{ xs: 4 }}>
                                                <Box style={{ padding: 16 }}>
                                                    <h6>1</h6>
                                                    <span className="caption">Dorem</span>
                                                </Box>
                                            </Column>
                                            <Column align="center" cols={{ xs: 4 }}>
                                                <Box style={{ padding: 16 }}>
                                                    <h6>2</h6>
                                                    <span className="caption">Ipsum</span>
                                                </Box>
                                            </Column>
                                            <Column align="center" cols={{ xs: 4 }}>
                                                <Box style={{ padding: 16 }}>
                                                    <h6>3</h6>
                                                    <span className="caption">Lorem</span>
                                                </Box>
                                            </Column>
                                        </Row>
                                    </Column>
                                    <Column style={{ marginBottom: 32, padding: '0 32px'}} align="center">
                                        <p>Você ainda pode fazer sua arte online ou contratar nossos designers grátis! \o/</p>
                                    </Column>
                                    <Column style={{ marginBottom: 16 }}>
                                        <Button
                                            onClick={() => store.set({ isOpen: false })}
                                            small
                                            block
                                        >Entendi!</Button>
                                    </Column>
                                </Row>
                            </Modal>
                        </State>
                    </Column>
                </Row>
            )
        )
    )
    .add(
        'with footer',
        withInfo({
            propTablesExclude: [ Container, Row, Column, Button, Link, Box, State ],
            text: 'Use attribute data-modal-footer'
        })(
            () => (
                <Row>
                    <Column cols={{ xs: 12 }}>
                        <Button onClick={() => store.set({ isOpen: true })}>
                            Open
                        </Button>
                        <State store={store}>
                            <Modal
                                isOpen={store.get('isOpen')}
                                onClose={() => { store.set({ isOpen: false }) }}
                            >
                                <Row>
                                    <Column style={{ textAlign: 'center' }} noGutter>
                                        <img
                                            src="images/modal-image2.jpg"
                                        />
                                    </Column>
                                    <Column style={{ marginBottom: 32 }} noGutter>
                                        <h6 align="center" style={{ padding: '0 40px' }}>
                                            Características do seu produto
                                        </h6>
                                    </Column>
                                </Row>
                                <Row data-modal-footer>
                                    <Column align="right" noGutter>
                                        <Link
                                            style={{ marginRight: 8 }}
                                            onClick={() => store.set({ isOpen: false })}
                                        >
                                            Cancelar
                                        </Link>
                                        <Button
                                            onClick={() => store.set({ isOpen: false })}
                                        >
                                            Editar
                                        </Button>
                                    </Column>
                                </Row>
                            </Modal>
                        </State>
                    </Column>
                </Row>
            )
        )
    )
