import { NavigateFunction, Location } from 'react-router-dom';

export const history = {
    navigate: null as NavigateFunction | null,
    location: null as Location | null
};
