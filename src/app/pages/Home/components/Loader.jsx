import React from 'react'

import { Row, Column } from '../../../ui-components/Grid'
import Box from '../../../ui-components/Box'

import style from './Loader.styl'

const Loader = () => (
    <div>
        <Row justifyCenter alignCenter>
            <Column cols={{ xs: 12, xl: 6 }}>
                <Box
                    className={style.loader__container}
                    shadow={{ grey: 2 }}
                    noRadius
                >
                    <Row justifyCenter alignCenter>
                        <div className={style.loader} />
                    </Row>
                </Box>
            </Column>
        </Row>
    </div>
)


export default Loader
