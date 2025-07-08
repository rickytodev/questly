import { describe, expect, it } from "bun:test";
import configServer from "../../config";

type Props = {
  email: string;
  password: string;
};

async function fetchControl(body: Props): Promise<number> {
  const url = `http://localhost:${configServer.port}/auth/access`;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return response.status;
}

describe("Access control test", () => {
  it("invalid credentials", async () => {
    const result = await fetchControl({
      email: "invalid@email.com",
      password: "invalid-password",
    });

    expect(result).toBe(401);
  });

  it("valid credentials", async () => {
    const result = await fetchControl({
      email: configServer.auth.email,
      password: configServer.auth.password,
    });

    expect(result).toBe(200);
  });
});
