


const createProfile = (username, email, password) => {


    return {
        type: "CREATE_PROFILE",
        username,
        email,
        password

    };
}

const updateProfile = (oldUsername, username, email, password, bio, image) => {

    return {
        type: "UPDATE_PROFILE",
        oldUsername,
        username,
        email,
        password,
        bio,
        image
    };
}

export { createProfile, updateProfile };