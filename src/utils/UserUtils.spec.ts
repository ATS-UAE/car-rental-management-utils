import { Role } from "car-rental-management-shared";
import { UserUtils } from "./UserUtils";

describe("UserUtils", () => {
	describe("is role better comparation.", () => {
		it("returns true if a better role is given.", () => {
			const isBetter = UserUtils.isRoleBetter(Role.GUEST, Role.ADMIN);

			expect(isBetter).toBeTruthy();
		});
		it("returns worse if a worse role is given.", () => {
			const isBetter = UserUtils.isRoleBetter(Role.ADMIN, Role.GUEST);

			expect(isBetter).toBeFalsy();
		});
	});
});
