import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Container, Row , Col } from "react-bootstrap";
import styles from "./style.module.css";


export default function Kabineti(props)
{
    return(<Authenticated
        auth={props.auth}>
            <div className={styles.content}>
                <Container>
                        <Row>
                            <Col sm={12}>
                                <h3>Kabineti</h3>
                                    <div className={styles.container}>
                                        <p>nemanja</p>    
                                    </div>  
                            </Col>
                        </Row>
                </Container>
            </div>
        </Authenticated>
        );
}