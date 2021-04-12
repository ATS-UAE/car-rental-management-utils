import { Role } from "car-rental-management-shared";
export declare abstract class UserUtils {
    private static roleRanks;
    static isRoleBetter: (requiredRole: Role, role: Role | string) => boolean;
}
