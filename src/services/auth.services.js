import {
    sigInModel,
    signOutModel, AuthContextProviderModel,
    AuthContextModel,

    updateProfileModel
} from '../models/firebase/auth.model'

export const updateProfileService = (user) => {
    updateProfileModel(user);
}


export const sigInService = (user, password) => {
    return sigInModel(user, password);
}
export const signOutService = () => {
    return signOutModel();
}


export const AuthContextService = AuthContextModel;

export const AuthContextProviderService = ({ children }) => {
    return (
        <AuthContextProviderModel>
            {children}
        </AuthContextProviderModel>
    )
}