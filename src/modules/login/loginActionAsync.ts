import {Dispatch} from "redux";
import {SimpleThunk} from "../../common/simpleThunk";
import { LoginActions } from "./loginAction";

export class LoginActionsAsync {
    static login(): SimpleThunk {
        return async (dispatch: Dispatch): Promise<void> => {
            try {
                dispatch(LoginActions.login.started({}));
                dispatch(LoginActions.login.done({params: {}, result: {}}));
            } catch (error) {
                dispatch(LoginActions.login.failed({params: {}, error}));
            }
        };
    }
}