import React from 'react'
import Shows from '../components/Shows'

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