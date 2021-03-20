export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('INUNDATION', JSON.stringify(data));
        next();
    }
};

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('INUNDATION')) {
        return JSON.parse(localStorage.getItem('INUNDATION'));
    } else {
        return false;
    }
};

export const signout = next => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('INUNDATION');
        next();
        return fetch(`http://localhost:5000/api/signout`, {
            method: 'GET'
        })
            .then(response => {
                console.log('signout', response);
            })
            .catch(err => console.log(err));
    }
};