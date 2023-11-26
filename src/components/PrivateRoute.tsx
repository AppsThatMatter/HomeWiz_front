import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authAtom } from '../state/auth';

import { history } from '../helpers/history';



const PrivateRoute=({ children }: { children: ReactNode}) => {
    const auth = useRecoilValue(authAtom);
    
    if (!auth) {
        // not logged in so redirect 
        return <Navigate to="/login" state={{ from: history.location }} />
    }

    // authorized so return
    return children;
}
export default PrivateRoute