"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUtils = void 0;
var car_rental_management_shared_1 = require("car-rental-management-shared");
var UserUtils = /** @class */ (function () {
    function UserUtils() {
    }
    UserUtils.roleRanks = [
        car_rental_management_shared_1.Role.MASTER,
        car_rental_management_shared_1.Role.ADMIN,
        car_rental_management_shared_1.Role.KEY_MANAGER,
        car_rental_management_shared_1.Role.GUEST
    ];
    UserUtils.isRoleBetter = function (requiredRole, role) {
        var requiredRoleIndex = UserUtils.roleRanks.findIndex(function (value) { return value === requiredRole; });
        var roleIndex = UserUtils.roleRanks.findIndex(function (value) { return value === role; });
        if (requiredRoleIndex >= 0 && roleIndex >= 0) {
            return roleIndex <= requiredRoleIndex;
        }
        return false;
    };
    return UserUtils;
}());
exports.UserUtils = UserUtils;
