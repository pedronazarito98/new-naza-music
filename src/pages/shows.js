import React from 'react'
import Link from 'next/link'
import Shows from '../components/Shows/index'

import { Row, Col} from 'react-bootstrap'

const ShowIndex = () => {
    return (
        <React.Fragment>
            
                <Row>
                    <Col>
                        <Shows />
                    </Col>
                </Row>
            
        </React.Fragment>
    )
}
export default ShowIndex