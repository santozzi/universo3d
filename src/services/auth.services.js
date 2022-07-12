import {
    newUserModel, getUserModel, sigInModel,
    signOutModel, AuthContextProviderModel,
    AuthContextModel,
    verificationEmailModel,
    updateProfileModel
} from '../models/firebase/auth.model'

export const updateProfileService = (user) => {
    updateProfileModel(user);
}

export const newUserService = (user) => {
    return newUserModel(user);
}
export const sigInService = (user, password) => {
    return sigInModel(user, password);
}
export const signOutService = () => {
    return signOutModel();
}

export const verificationEmailService = (email) => {
    verificationEmailModel(email);
}


export const getUserService = () => {
    return getUserModel();
}
export const AuthContextService = AuthContextModel;

export const AuthContextProviderService = ({ children }) => {
    return (
        <AuthContextProviderModel>
            {children}
        </AuthContextProviderModel>
    )
}