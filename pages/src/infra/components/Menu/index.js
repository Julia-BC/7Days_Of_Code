// import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

function Head({ title }) {
    return (
        <NextHead>
            <title>
                {title}
            </title>
        </NextHead>
    );
}