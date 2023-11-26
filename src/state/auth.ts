import { atom } from 'recoil';

// Retrieve user from local storage and parse JSON, default to an empty object if null
const initialUser = JSON.parse(localStorage.getItem('user') || 'null');

const authAtom = atom({
    key: 'auth',
    default: initialUser
});

export { authAtom };
