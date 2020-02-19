import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="es">
        <title>Accounting Web Service</title>
        <Head>
          <link rel="stylesheet" href="/css/adminlte.min.css" />
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/react-redux-toastr.min.css" />
          <link rel="stylesheet" href="/css/all.min.css" />
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" />
          <script src="/js/adminlte.js" />
        </Head>
        <body className="sidebar-mini">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
