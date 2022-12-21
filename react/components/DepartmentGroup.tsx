import React from 'react';
import { useRuntime } from 'vtex.render-runtime'

type Props = {
    departments: [Category]
    handleSetSlug: any
}

type Category = {
    id: number,
    name: string,
    slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {
    console.log("mi grupo de departamentos es", departments);
    const { navigate } = useRuntime()

    const onHandleSetSlug = (event: any) => {
        navigate({
            to: `${event.target.value}/?map=ft`
        })
        console.log("prueba event", event.target.value)
        //handleSetSlug(`${event.target.value}/$\{term\&map=ft}`)
        handleSetSlug(`${event.target.value}/?map=ft`)
    }


    const DepartmentsOptions = (department: any) => {

        console.log(department.department.slug)
        return (
            <option
                value={department.department.slug}
                key={department.department.id}

            >
                {department.department.slug}

            </option>
        )


    }
    return (
        <select
            onChange={onHandleSetSlug}
            defaultValue="value0"
        >
            <option disabled value="value0">Ver productos</option>
            {departments.map((department: Category) => (<DepartmentsOptions department={department} />))}
        </select>
    )
}
export default DepartmentGroup; 