const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");

const {
    validateRegisterInput,
    validateLoginInput,
} = require("../../utils/validators");
const { SECRET_KEY } = require("../../config");
const User = require("../../models/User");

const generateToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
        },
        SECRET_KEY,
        { expiresIn: "1h" }
    );
};

module.exports = {
    Query: {
        async getAllUsers() {
            try {
                const users = await User.find();
                return users;
            } catch (error) {
                throw new Error(error);
            }
        },
    },

    Mutation: {
        // the args mean arguments that take from registerInput
        async register(
            _,
            {
                registerInput: {
                    username,
                    email,
                    password,
                    confirmPassword,
                    firstname,
                    lastname,
                },
            }
        ) {
            const user = await User.findOne({ username });
            const { errors, valid } = validateRegisterInput(
                username,
                email,
                password,
                confirmPassword,
                firstname,
                lastname
            );

            if (!valid) {
                throw new UserInputError("Error...", { errors });
            }

            password = await bcrypt.hash(password, 12);

            if (user)
                throw new UserInputError("Username is already exist", {
                    errors: {
                        username: "This username is taken",
                    },
                });

            const newUser = new User({
                email,
                username,
                password,
                firstname,
                lastname,
                createdAt: new Date().toISOString(),
            });

            const res = await newUser.save();
            const token = generateToken(res);

            return {
                ...res._doc,
                id: res._id,
                token,
            };
        },

        async login(_, { loginInput: { username, password } }) {
            const { errors, valid } = validateLoginInput(username, password);
            const user = await User.findOne({ username });
            if (!user) {
                errors.general = "User is not exist";
                throw new UserInputError("User is not exist", { errors });
            }

            if (!valid) {
                throw new UserInputError("Error...", { errors });
            }

            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                errors.general = "Wrong password";
                throw new UserInputError("Wrong password", { errors });
            }

            return {
                ...user._doc,
                id: user._id,
                token: generateToken(user),
            };
        },
    },
};
