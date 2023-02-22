import { Container,Row,Col } from "react-bootstrap";
import styles from "./style.module.css";

export default function Footer(){
    return(<div className={styles.footer}>
        <Container>
            <Row>
                <Col sm={12}>
                    Footer
                </Col>
            </Row>
        </Container>
    </div>);
}