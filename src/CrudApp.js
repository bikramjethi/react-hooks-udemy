import React, { useContext } from 'react';
import { UserContext } from './index';

export default function CrudApp() {
    const value = useContext(UserContext);
    return <div>Hello, {value}</div>
};