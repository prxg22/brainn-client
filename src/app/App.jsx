import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row, Column } from './ui-components/Grid'
import Box from './ui-components/Box'
import Input from './ui-components/Input'
import Button from './ui-components/Button'
import Tag from './ui-components/Tag'
import Modal from './ui-components/Modal'
import Link from './ui-components/Link'
import style from './App.styl' // eslint-disable-line

const App = ({ title }) => (
    <div>
        <h1>{title}</h1>
        <Container fluid>
            <Row justifyCenter alignCenter>
                <Column cols={{ xs: 8 }}>
                    <Box
                        style={{ padding: '16px' }}
                        shadow={{ grey: 2 }}
                        noRadius
                    >
                        <Row justifyCenter alignCenter>
                            <h4 style={{ display: 'inline' }}>https://github.com/</h4>
                            <Input style={{ margin: '0 32px 0 4px' }} name="username" placeholder="octacatpus" />
                            <Button iconPosition="right" icon="chevron-right" small>enviar</Button>
                            <Tag>#react</Tag>
                            <Link icon="chevron-right" iconPosition="right">Meu link</Link>
                            <Modal isOpen={false}>
                                <div>AHHHH</div>
                                <div data-modal-footer>
                                    <Button style={{ marginRight: '16px' }}>AHHH</Button>
                                    <Button kind="outline-primary">yeeeeh</Button>
                                </div>
                            </Modal>
                        </Row>
                    </Box>
                </Column>
            </Row>
        </Container>
    </div>
)

App.propTypes = {
    title: PropTypes.string.isRequired,
}

export default App
