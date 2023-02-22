import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Layout from "./Layout/Layout";
import styles from "./style.module.css";

export default function ListaKabineta()
{
    return(<Layout>
        <div className={styles.content}>
            <Container>
                <Row>
                    <Col sm={12}>
                    <h1>Lista Kabineta</h1>
                        <div className={styles.container}>
                                <div className={styles.card}>

                                </div>
                                <div className={styles.card}>

                                </div>
                                <div className={styles.card}>

                                </div>
                                <div className={styles.card}>

                                </div>
                                <div className={styles.card}>

                                </div>
                                <div className={styles.card}>

                                </div>
                        </div>
                    </Col>
                </Row>
            </Container>    
        </div>
    </Layout>);
}