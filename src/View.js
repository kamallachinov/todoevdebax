import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useTodo } from './Context';
import { Table } from 'reactstrap'
function View() {
    const { todo, setTodo } = useTodo();
    const handleDelete = (id) => {
        const deletItem = todo.filter(x => x.id != id)
        setTodo(deletItem)
    }
    return (
        <>
            <Table
            >
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                {
                    (
                        <>
                            <tbody>
                                {
                                    todo.map((item, index) => {
                                        return (
                                            <>
                                                <tr key={index}>
                                                    <th scope="row">
                                                        1
                                                    </th>
                                                    <td>
                                                        {item.emailorPhone}
                                                    </td>
                                                    <td>
                                                        <button onClick={() => { handleDelete(item.id) }}>Delete</button>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </>
                    )
                }

            </Table>


        </>
    )
}

export default View