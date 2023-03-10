
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage, Head } from "@inertiajs/react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";



export default function KreiranjeKabineta(props)
{
    const {data,setData,post} = useForm({
        naziv_kabineta:"",
        sprat:"",
        br_racunara:"",
    }); 

    const { errors: formErrors, flash } = usePage().props;

    const onChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('/kabineti'));
    };

    return(<Authenticated
        auth={props.auth}
    >
        <div className={styles.content}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <h3>Kreiranje Kabineta</h3>
                        <div className={styles.container}>
                            <form className="w-full max-w-sm">
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                        Naziv Kabineta
                                    </label>
                                    </div>
                                    <div className="md:w-2/3">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="inline-full-name" type="text"/>
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-number1">
                                        Sprat
                                    </label>
                                    </div>
                                    <div className="md:w-2/3">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="inline-number1" type="text"/>
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-number2">
                                        Broj Racunara
                                    </label>
                                    </div>
                                    <div className="md:w-2/3">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="inline-number2" type="number"/>
                                    </div>
                                </div>
                                <div className="md:flex md:items-center">
                                    <div className="md:w-1/3"></div>
                                    <div className="md:w-2/3">
                                    <button className="shadow bg-cyan-500 hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                        Kreiraj
                                    </button>
                                    </div>
                                </div>
                                </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </Authenticated>);
}