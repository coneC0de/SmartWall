import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import styles from "./style.module.css";
import Footer from '@/Pages/Layout/Footer';
import { IoArrowUp } from "react-icons/io5";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    window.addEventListener("scroll", toggleVisible);
    return (
        <div className="min-h-screen bg-white" id={styles.content}>
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href={route('/pocetna')}>
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink className={styles.navlinks} href={route('/pocetna')} active={route().current('/pocetna')}>
                                    Početna
                                </NavLink>
                                <NavLink className={styles.navlinks} href={route('/kreiranje-kabineta')} active={route().current('/kreiraje-kabineta')}>
                                    Kreiranje Kabineta
                                </NavLink>
                                <NavLink className={styles.navlinks} href={route('/kreiranje-odeljenja')} active={route().current('/kreiranje-odeljenja')}>
                                    Kreiranje Odeljenja
                                </NavLink>
                                <NavLink className={styles.navlinks} href={route('/kreiranje-predmeta')} active={route().current('/kreiranje-predmeta')}>
                                    Kreiranje Predmeta
                                </NavLink>
                                <NavLink className={styles.navlinks} href={route('/lista-kabineta')} active={route().current('/lista-kabineta')}>
                                    Lista Kabineta
                                </NavLink>
                                <NavLink className={styles.dangerlink} href={route('/prijava-problema')} active={route().current('/prijava-problema')}>
                                    Prijava Problema
                                </NavLink>
                                <NavLink className={styles.navlinks} href={route('/zahtevi')} active={route().current('/zahtevi')}>
                                    Zahtevi
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')} className={styles.navlinks}>
                            Početna
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className={styles.navlinks}>
                                {auth.user.name}
                            </div>
                            <div className={styles.navlinks}>{auth.user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')} className={styles.navlinks}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink  method="post" href={route('logout')} as="button" className={styles.navlinks}>
                                Log Out
                            </ResponsiveNavLink>
                            
                            <div className='pt-4 pb-1 border-t border-gray-200'>
                                <ResponsiveNavLink className={styles.navlinks} href={route('/kreiranje-kabineta')} as="button">
                                    Kreiranje Kabineta
                                </ResponsiveNavLink>
                                <ResponsiveNavLink className={styles.navlinks} href={route('/kreiranje-odeljenja')} as="button">
                                    Kreiranje Odeljenja
                                </ResponsiveNavLink>
                                <ResponsiveNavLink className={styles.navlinks} href={route('/kreiranje-predmeta')} as="button">
                                    Kreiranje Predmeta
                                </ResponsiveNavLink>
                                <ResponsiveNavLink className={styles.navlinks} href={route('/lista-kabineta')} as="button">
                                    Lista Kabineta
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>
                {children}
                
                <button
                        style={{ display: visible ? "inline" : "none" }}
                        onClick={scrollToTop}
                        className={styles.scroll}
                    >
                        <IoArrowUp></IoArrowUp>
                    </button>
                </main>
            

            <Footer></Footer>
        </div>
    );
}
