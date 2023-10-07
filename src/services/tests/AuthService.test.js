import AuthService from "../AuthService";

describe("Testing Auth Sservice", () => {
  it("validate invalid username or password", () => {
    const auth = AuthService();
    const validate = auth.validate("abac", "abc");
    expect(validate).toBe(undefined);
  });

  it("validate valid username or password", () => {
    const auth = AuthService();
    const validate = auth.validate("abc", "abc");
    const user2 = {
      username: "abc",
      password: "abc",
    };

    expect(validate).toStrictEqual(user2);
  });
});
