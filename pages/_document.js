/**
 * ==============================================================================
 * Imports
 * ==============================================================================
 */
import React from "react";

/** ********************************************** */
/** ********************************************** */
/** ********************************************** */

import { Html, Head, Main, NextScript } from "next/document";

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
export default function Document(props) {
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
        <Html lang="en">
            <Head>
                <meta name="author" content="Captivedge" />
                <meta
                    name="Copyright"
                    content={`Copyright (c) ${new Date().getFullYear()} Captivedge`}
                ></meta>

                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com/"
                    crossOrigin="true"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />

                {/* <script src="/scripts/themeSelector.js"></script> */}
                <script src="/scripts/initialize.js"></script>

                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=UTF-8"
                />

                <meta property="og:site_name" content="Captivedge" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary" />

                <meta
                    property="og:image"
                    content="https://Captivedge.com/images/user-images/user-2/email-banner.jpeg"
                />
                <meta
                    itemProp="image"
                    content="https://Captivedge.com/images/user-images/user-2/email-banner.jpeg"
                />
                <meta
                    name="twitter:image"
                    content="https://Captivedge.com/images/user-images/user-2/email-banner.jpeg"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */
}

/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
