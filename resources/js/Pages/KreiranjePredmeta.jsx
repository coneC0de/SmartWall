import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";


export default function KreiranjePredmeta(props)
{
    return(<Authenticated
       auth={props.auth}>
        <div className={styles.content}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <h3>Kreiranje Predmeta</h3>
                            <div className={styles.container}>
                                
                            </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </Authenticated>)
}