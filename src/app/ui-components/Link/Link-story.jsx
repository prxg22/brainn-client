// libs
import React  from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text, number, select } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'

// lib components
import Container from '../Grid/Container'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import Box from '../Box'

import Link from './Link'

storiesOf('Link', module)
    .add(
        'default',
        withInfo({
            propTablesExclude: [ Container, Row, Column, Box ]
        })(
            () => {
                const groups = {
                    style: 'Style',
                    icon: 'Icon',
                    content: 'Content',
                }
                return (
                    <Container>
                        <Row>
                            <Column
                                cols={{ xs: 4 }}
                                offsets={{ xs: 4 }}
                            >
                                <Box
                                    style={{
                                        padding: 16,
                                    }}
                                >
                                    <Link
                                        icon={text('Icon', 'arrow-left', groups.icon)}
                                        iconPosition={select('Icon Position',{
                                            left: 'Left',
                                            right: 'Right',
                                        }, 'left', groups.icon)}
                                    >
                                        {text('Content', 'Link', groups.content)}
                                    </Link>
                                </Box>
                            </Column>
                        </Row>
                    </Container>
                )
            }
        )
    )
