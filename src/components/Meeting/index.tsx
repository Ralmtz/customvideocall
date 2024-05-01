import React, { FC, useEffect } from "react";
import { Form, useLoaderData } from "react-router-dom";
import Loader from "../Loader";

interface Client {
    name?: string | null
}

const Meeting: FC<Client> = () => {

    return (
        <>
            <Loader />
        </>
    )
}

export default Meeting;