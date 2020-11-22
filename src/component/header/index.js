import {
    HeaderDiv, HeaderContents
} from './styles'
import {
    Container, Row, Col
} from 'react-bootstrap'

export function Header() {
    return (
        <HeaderDiv>
            <Container>
                <Row>
                    <Col>1</Col>
                    <Col>2</Col>
                </Row>
            </Container>
        </HeaderDiv>
    );
}

