import React from 'react'
import { useQuery } from "@apollo/client";

import { FETCH_POST_QUERY } from "../../composables/Fetch/PostDef";

const Feed = () => {
    const { loading, data, error } = useQuery(FETCH_POST_QUERY);
    if (loading) return <div className="">Loading...</div>;
    if (error) return `Error! ${error}`;
    return (
        <div>
            this is feed  
        </div>
    )
}

export default Feed
