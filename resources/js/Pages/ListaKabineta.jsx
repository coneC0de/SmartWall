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
                    <h3>Lista Kabineta</h3>
                        <div className={styles.container}>
                                <div className={styles.card}>
                                    K1
                                </div>
                                <div className={styles.card}>
                                    K2
                                </div>
                                <div className={styles.card}>
                                    K3
                                </div>
                                <div className={styles.card}>
                                    K4
                                </div>
                                <div className={styles.card}>
                                    K5
                                </div>
                                <div className={styles.card}>
                                    K6
                                </div>
                        </div>
                    </Col>
                </Row>
            </Container>    
        </div>
    </Layout>);
}