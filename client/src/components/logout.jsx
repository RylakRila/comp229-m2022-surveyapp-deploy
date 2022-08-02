import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {logout} from '../service/auth-api';

function Logout()
{
    useEffect(() => {
        document.title = "Logout";
        logout();
        window.location.reload();
    }, []);
    const history = useHistory();

    return(
       history.push('/')
    );
}

export default Logout;