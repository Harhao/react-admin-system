export const fakeAuth = {
    authenticate() {
        const token = sessionStorage.getItem("loginToken");
        return !!token ? true : false;
    },
    setToken(token) {
        sessionStorage.setItem("loginToken", token);
        return true;
    },
    signout() {
        sessionStorage.removeItem('loginToken');

    }
};