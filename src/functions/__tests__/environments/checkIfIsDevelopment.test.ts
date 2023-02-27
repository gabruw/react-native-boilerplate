import { checkIfIsDevelopment } from "@app/functions/environments/checkIfIsDevelopment";

describe("checkIfIsDevelopment()", () => {
    it("should check that the environment is the development one being in the test environment", () => {
        const isDevelopment = checkIfIsDevelopment();
        expect(isDevelopment).toBeFalsy();
    });
});
