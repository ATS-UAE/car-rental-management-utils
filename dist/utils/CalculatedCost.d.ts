import { BookingChargeUnit } from "car-rental-management-shared";
export interface BookingParams {
    from: Date;
    to: Date;
    startMileage: number | null;
    endMileage: number | null;
}
export interface CostParams {
    bookingChargeUnit: BookingChargeUnit | null;
    bookingChargeCount: number;
    bookingCharge: number;
}
export declare class CalculatedCost {
    private bookingParams;
    private costParams;
    private constructor();
    static calculateBookingCost: (bookingParams: BookingParams, costParams: CostParams) => CalculatedCost;
    hasCost: () => boolean;
    getCost: () => number | null;
}
