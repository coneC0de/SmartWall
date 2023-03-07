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
                <div className={styles.content}>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                    <h3>Welcome to HomePage !</h3>
                                    <div className={styles.container}>
                                        <p>Home</p>
                                    </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
        </AuthenticatedLayout>
    );
}
