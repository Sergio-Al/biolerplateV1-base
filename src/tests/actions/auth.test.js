import { login, startLogin, logout, startLogout } from "../../actions/auth";

test("should generate login action object", () => {
  const uidUser = "user123";
  const action = login(uidUser);
  expect(action).toEqual({
    type: "LOGIN",
    uid: uidUser,
  });
});

test("should startLogin correctly", (done) => {
  startLogin();
  done();
});

test("should generate logout action", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT",
  });
});

test("should logout correctly", (done) => {
  startLogout();
  done();
});
