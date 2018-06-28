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

import Button from './Button'

// custom story styles
import style from '../../styles/storybook/base.styl'

storiesOf('Button', module)
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

                const kindValue = select('Kind', {
                    primary: 'Primary',
                    funnel: 'Funnel',
                    inverse: 'Inverse',
                    'outline-primary': 'Outline Primary',
                    'outline-funnel': 'Outline Funnel',
                    'outline-inverse': 'Outline Inverse',
                }, 'primary', groups.style)

                const onlyIconValue = boolean('Only Icon', false, groups.icon)

                return (
                    <Container>
                        <Row>
                            <Column
                                cols={{ xs: 12 }}
                            >
                                <Box
                                    style={{
                                        padding: 16,
                                    }}
                                    theme={(kindValue === 'inverse' || kindValue === 'outline-inverse') ? 'dark' : ''}
                                >
                                    <Button
                                        kind={kindValue}
                                        small={boolean('Small', false, groups.style)}
                                        block={boolean('Block', false, groups.style)}
                                        pill={boolean('Pill', false, groups.style)}
                                        disabled={boolean('Disabled', false, groups.style)}
                                        icon={text('Icon', '', groups.icon)}
                                        iconPosition={select('Icon Position', {
                                            left: 'Left',
                                            right: 'Right',
                                        }, 'left', groups.icon)}
                                        href={text('Href', '', groups.content)}
                                        onlyIcon={onlyIconValue}
                                    >
                                        {text('Content', 'Button', groups.content)}
                                    </Button>
                                </Box>
                            </Column>
                        </Row>
                    </Container>
                )
            }
        )
    )
    .add(
        'only icon',
        withInfo({
            propTablesExclude: [ Container, Row, Column, Box ]
        })(
            () => {
                const groups = {
                    style: 'Style',
                    icon: 'Icon',
                }

                const kindValue = select('Kind', {
                    primary: 'Primary',
                    funnel: 'Funnel',
                    inverse: 'Inverse',
                    'outline-primary': 'Outline Primary',
                    'outline-funnel': 'Outline Funnel',
                    'outline-inverse': 'Outline Inverse',
                }, 'primary', groups.style)

                const onlyIconValue = boolean('Only Icon', false, groups.icon)

                return (
                    <Container>
                        <Row>
                            <Column
                                cols={{ xs: 12 }}
                            >
                                <Box
                                    style={{
                                        padding: 16,
                                    }}
                                    theme={(kindValue === 'inverse' || kindValue === 'outline-inverse') ? 'dark' : ''}
                                >
                                    <Button
                                        kind={kindValue}
                                        disabled={boolean('Disabled', false, groups.style)}
                                        icon={text('Icon', 'angle-left', groups.icon)}
                                        iconPosition={select('Icon Position', {
                                            left: 'Left',
                                            right: 'Right',
                                        }, 'left', groups.icon)}
                                        onlyIcon={onlyIconValue}
                                    />
                                    <Button
                                        kind={kindValue}
                                        icon="angle-right"
                                        iconPosition="left"
                                        onlyIcon={onlyIconValue}
                                    />
                                </Box>
                            </Column>
                        </Row>
                    </Container>
                )
            }
        )
    )
