'use client'

import React, { useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';

// Using ES6 import syntax
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

// import 'highlight.js/styles/default.css';
// dark theme
// import 'highlight.js/styles/dark.css';
import 'highlight.js/styles/github.css';
import 'highlight.js/styles/github-dark.min.css';

function CodeHighlighter() {

    useEffect(() => {

        hljs.registerLanguage('javascript', javascript);

        const handleLoad = () => {

            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightElement(block);
            });
        };

        handleLoad();

        // window.addEventListener('load', handleLoad);

        return () => {
            // window.removeEventListener('load', handleLoad)
        };

    }, []);

    return (
        <></>
    );
}

export default CodeHighlighter;
