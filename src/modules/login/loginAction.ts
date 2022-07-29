import {actionCreator} from "../../core/store";

export class LoginActions {
    static login = actionCreator.async<IEmpty, IEmpty, Error>("Login/LOGIN");
    static logout = actionCreator("Login/LOGOUT");
}