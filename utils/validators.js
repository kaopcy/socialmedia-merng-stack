const validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword,
    firstname,
    lastname
) => {
    const errors = {};
    if (username.trim() === "") {
        errors.username = "Username must not be empty";
    }
    if (email.trim() === "") {
        errors.email = "email must not be empty";
    } else {
        const regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!email.match(regEx)) {
            errors.email = "email must be a valid email";
        }
    }
    if (password === "") {
        errors.password = "password must not be empty";
    } else if (password !== confirmPassword) {
        errors.password = "password not match";
    }
    if (firstname === "") {
        errors.firstname = "firstname must not be empty";
    }
    if (lastname === "") {
        errors.lastname = "lastname must not be empty";
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1,
    };
};

const validateLoginInput = (username, password) => {
    const errors = {};
    if (username.trim() === "") {
        error.username = "Username must not be empty";
    }
    if (password.trim === "") {
        error.password = "password must not be empty";
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1,
    };
};

module.exports = {
    validateRegisterInput,
    validateLoginInput,
};
