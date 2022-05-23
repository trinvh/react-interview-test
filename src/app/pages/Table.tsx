import React from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    th {
        padding: 6px 10px;
        border: #ccc 1px solid;
        background: #f9f9f9;
    }
    td {
        padding: 6px 10px;
        border: #ccc 1px solid;
    }
`;

const Pagination = styled.ul`
    list-style: none;
    padding: 0;
    li {
        display: inline-block;
        padding: 10px;
        border: #ccc 1px solid;
        cursor: pointer;
    }
`;

const TablePage = (props: any) => {
    const [page, setPage] = React.useState(1);
    const {
        response: users,
        error,
        loading,
    } = useFetch<any[]>(
        `https://628b171a7886bbbb37affd40.mockapi.io/users?limit=5&page=${page}`
    );

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {loading && (
                        <tr>
                            <td colSpan={4} style={{ textAlign: 'center' }}>Loading...</td>
                        </tr>
                    )}
                    {users?.map((u: any) => (
                        <tr>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.street}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination>
                {[...Array(10).keys()].map((p) => (
                    <li onClick={() => setPage(p + 1)}>{p + 1}</li>
                ))}
            </Pagination>
        </>
    );
};

export default TablePage;
