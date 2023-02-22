import { Col, Container, Row } from "react-bootstrap";
import Layout from "./Layout/Layout";
import styles from "./style.module.css";


export default function KreiranjeOdeljenja()
{
    return(<Layout>
        <div className={styles.content}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <h3>Kreiranje Odeljenja</h3>
                            <div className={styles.container}>
                                
                            </div>
                    </Col>
                </Row>
            </Container>
        </div>



    </Layout>)
}