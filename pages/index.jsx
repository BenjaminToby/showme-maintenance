/**
 * ==============================================================================
 * Imports
 * ==============================================================================
 */
import React from "react";

/** ********************************************** */
/** ********************************************** */
/** ********************************************** */

import GeneralLayout from "../layouts/GeneralLayout";

/** ****************************************************************************** */

export const HomepageContext = React.createContext();

/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */

/**
 * ==============================================================================
 * Main Component { Functional }
 * ==============================================================================
 * @param {Object} props - Server props
 */
export default function Homepage(props) {
    /**
     * Get Contexts
     *
     * @abstract { React.useContext }
     */

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    /**
     * Javascript Variables
     *
     * @abstract Non hook variables and functions
     */
    const pageTitle = "Homepage | Showmerebates";
    const pageDescription = "Maintenance";

    let head = (
        <>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
        </>
    );

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    /**
     * React Hooks
     *
     * @abstract { useState, useEffect, useRef, etc ... }
     */

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    /**
     * Function Return
     *
     * @abstract Main Function Return
     */
    return (
        <GeneralLayout
            head={head}
            serverProps={props}
            darkBgHeader={true}
            transparentHeader={true}
        >
            <HomepageContext.Provider value={{ serverProps: props }}>
                <main>
                    <section
                        className="relative h-screen justify-center text-white bg-primary_darkest pt-32 pb-20"
                        style={{
                            minHeight: "500px",
                        }}
                    >
                        <div className="relative z-10 flex flex-col items-center gap-2 max-w-4xl w-full">
                            <img
                                src="/images/Logo-standalone-white.svg"
                                alt=""
                                width={250}
                                height={60}
                            />
                            <h1 className="m-0">Maintenance</h1>
                            <span className="text-2xl text-center">
                                Showmerebates is currently undergoing
                                maintenance. We will be up and running as soon
                                as possible.
                            </span>
                        </div>
                        <img
                            src="/images/showme-bg.webp"
                            alt=""
                            className="absolute z-0 top-0 left-0 w-full h-full opacity-20"
                        />
                    </section>
                </main>
            </HomepageContext.Provider>
        </GeneralLayout>
    );

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */
}
