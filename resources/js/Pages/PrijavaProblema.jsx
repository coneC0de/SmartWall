import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";

export default function PrijavaProblema(props)
{
    return(<>
        <Authenticated
        auth={props.auth}>
            <div className={styles.content}>
                <Container>
                    <Row>
                        <Col sm={12}>
                                <h3>Prijava Problema</h3>
                            <div className={styles.container}>
                                <form className="w-full max-w-sm">
                                    



                                    <div className="md:flex md:items-center">
                                        <div className="md:w-1/3"></div>
                                        <div className="md:w-2/3">
                                        <button className="shadow bg-cyan-500 hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                            Sačuvaj
                                        </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Authenticated>
    </>)
}