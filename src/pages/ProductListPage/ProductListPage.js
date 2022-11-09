import React, { Component, useState, useEffect } from 'react';

export default function ProductListPage() {

    useEffect(() => {
        console.log("product list page loaded")
        console.log(process.env.REACT_APP_MY_VARIABLE)
    });

    return (
    <div>
        Contenido pagina product list.
    </div>
    );
}