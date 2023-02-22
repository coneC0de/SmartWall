import { Col, Container, Row } from "react-bootstrap";
import Layout from "./Layout/Layout";
import styles from "./style.module.css";


export default function KreiranjeKorisnika()
{
    return(<Layout>
        <div className={styles.content}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <h3>Kreiranje Korisnika</h3>
                            <div className={styles.container}>
                                
                            </div>
                    </Col>
                </Row>
            </Container>
        </div>



    </Layout>)
}