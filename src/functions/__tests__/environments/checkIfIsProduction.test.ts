import { checkIfIsProduction } from "@app/functions/environments/checkIfIsProduction";

describe("checkIfIsProduction()", () => {
    it("should check that the environment is the production one being in the test environment", () => {
        const isProduction = checkIfIsProduction();
        expect(isProduction).toBeFalsy();
    });
});
