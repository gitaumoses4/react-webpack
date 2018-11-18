export const getCurrentUser = () => {
    let user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export const isAdmin = () => {
    let user = getCurrentUser();
    return user ? user.role === "Administrator" : false;
};
