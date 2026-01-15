const checkValidData = (email, pass) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const isPassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pass);

    if (!isEmailValid) {
        return "Invalid Email! Enter correct email";
    }
    if (!isPassValid) {
        return "Weak Password! Use Strong Password"
    }
}

export default checkValidData;