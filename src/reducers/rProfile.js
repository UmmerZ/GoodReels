const initialState = require("../defaults/users.json");

const rProfile = (state = initialState, action) => {

    

    

    switch (action.type){

        
        case "CREATE_PROFILE": {

            const newProfile = {

                username: action.username,
                email: action.email,
                password: action.password,
                bio: "",
                image: ""
                };

                return [...state, newProfile];
            }
            
        

        case "UPDATE_PROFILE":{

                const editedProfile = {
                    username: action.username,
                    email: action.email,
                    password: action.password,
                    bio: action.bio,
                    image: action.image    
                }

                let alteredArray = [...state];
                
                for (let profile of alteredArray){
                    if (profile.username === action.oldUsername){
                        alteredArray.splice(alteredArray.indexOf(profile),1);
                        alteredArray.push(editedProfile);
                    }
                }

                

                return alteredArray;
            }
            
        
        default:
            return state;

    }

}
export default rProfile;