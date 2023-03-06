import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Footer from '@/Pages/Layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./style.module.css";


export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Početna" />

            <Container>
                <Row>
                    <Col sm={12}>

                        <div className={styles.test}>
                            <h2>Test</h2>
                        </div>

                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </AuthenticatedLayout>
    );
}
