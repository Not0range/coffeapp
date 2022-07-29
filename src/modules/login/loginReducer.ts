import {Failure} from "typescript-fsa";
import {reducerWithInitialState} from "typescript-fsa-reducers";
import {newState} from "../../common/newState";
import {CoreActions} from "../../core/store";
import {LoginActions} from "./loginAction";
import {LoginInitialState, ILoginState} from "./loginState";

function rehydrate(): ILoginState {
    return {...LoginInitialState};
}

function loginStarted(state: ILoginState): ILoginState {
    return newState(state, {});
}

function loginDone(state: ILoginState): ILoginState {
    return newState(state, {});
}

function loginFailed(state: ILoginState, failed: Failure<ILoginState, Error>): ILoginState {
    return newState(state, {});
}

export const loginReducer = reducerWithInitialState(LoginInitialState)
    .case(CoreActions.rehydrate, rehydrate)
    .case(LoginActions.login.started, loginStarted)
    .case(LoginActions.login.done, loginDone)
    .case(LoginActions.login.failed, loginFailed)
;