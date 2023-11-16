'use client'

import {ErrorPageInterface} from "@/app/blog/types";

const Error = ({error}: ErrorPageInterface) => {
    return (
        <h1>
            Ooops !!! {error}
        </h1>
    );
};

export default Error;