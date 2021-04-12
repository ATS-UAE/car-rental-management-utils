import { BookingCreateFormValues, UserBookings } from "./BookingFormCreateValidator";
export declare abstract class BookingFormValidator {
    static validateBookingCreate: (values: Partial<BookingCreateFormValues>, bookings: UserBookings[]) => any;
}
export type { BookingCreateFormValues };
