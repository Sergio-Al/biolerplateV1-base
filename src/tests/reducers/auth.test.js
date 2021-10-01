import authReducer from "../../reducers/auth";

test("should set default state", () => {
  const state = authReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({});
});

test("should login user", () => {
  const action = {
    type: "LOGIN",
    uid: "user1234",
  };
  const state = authReducer({}, action);
  expect(state).toEqual({ uid: action.uid });
});

test("should logout user", () => {
  const action = {
    type: "LOGOUT",
  };
  const state = authReducer({ uid: "user1234" }, action);
  expect(state).toEqual({});
});
