import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'

import DepartmentGroup from './DepartmentGroup'

//import { SearchBar } from 'vtex.store-components'

const DepartmentSearch = () => {
    const { data, loading } = useQuery(QUERY_VALUE)
    const [slug, setSlug] = useState("");

    console.log("mi objeto seleccionado es", slug)
    return loading
        ?
        <div>loading....</div>
        :
        <>
            <DepartmentGroup
                departments={data?.categories[0]?.children}
                handleSetSlug={setSlug}
            />

        </>
}

export default DepartmentSearch
