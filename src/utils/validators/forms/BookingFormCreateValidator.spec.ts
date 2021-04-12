import { BookingType } from "car-rental-management-shared";
import {
	UserBookings,
	BookingFormCreateValidator
} from "./BookingFormCreateValidator";
import { DateUtils } from "../../DateUtils";
import { BookingFormUtils } from "../../test-utils/forms/BookingFormUtils";

describe("BookingFormCreateValidator", () => {
	describe("Booking interval validations", () => {
		it("Does not allow when the start is greater than end.", () => {
			const formValues = BookingFormUtils.createBookingFormValues({
				from: DateUtils.addSecondsToDate(new Date(), 100),
				to: new Date()
			});
			const errors = BookingFormCreateValidator.validate(formValues, []);
			expect(errors.from).toBeDefined();
			expect(errors.to).toBeDefined();
		});
	});
	describe("Bookings when the user already have a booking on the specified time.", () => {
		it("Does not allow bookings when the selected interval already has a booking.", () => {
			const formValues = BookingFormUtils.createBookingFormValues();
			const existingBookings: UserBookings[] = [
				{
					bookingType: formValues.bookingType,
					from: DateUtils.getUnixTimestampFromDate(formValues.from),
					to: DateUtils.getUnixTimestampFromDate(formValues.to),
					userId: formValues.userId
				}
			];

			const errors = BookingFormCreateValidator.validate(
				formValues,
				existingBookings
			);

			expect(errors.from).toBeDefined();
			expect(errors.to).toBeDefined();
		});
		it("Allow bookings when the selected interval does not have a booking.", () => {
			const formValues = BookingFormUtils.createBookingFormValues();

			const errors = BookingFormCreateValidator.validate(formValues, []);

			expect(Object.values(errors)).toHaveLength(0);
		});
		it("Allows bookings when the selected interval already has a booking and a replacement booking.", () => {
			const formValues = BookingFormUtils.createBookingFormValues({
				bookingType: BookingType.REPLACEMENT,
				replaceBrand: "TEST",
				replaceModel: "TEST",
				replacePlateNumber: "TEST",
				replaceVin: "TEST"
			});
			const existingBookings: UserBookings[] = [
				{
					bookingType: formValues.bookingType,
					from: DateUtils.getUnixTimestampFromDate(formValues.from),
					to: DateUtils.getUnixTimestampFromDate(formValues.to),
					userId: formValues.userId
				}
			];

			const errors = BookingFormCreateValidator.validate(
				formValues,
				existingBookings
			);

			expect(Object.values(errors)).toHaveLength(0);
		});
	});
	describe("Replacement bookings", () => {
		it("Requires the replacement vehicle fields when a booking is a replacement type.", () => {
			const formValues = BookingFormUtils.createBookingFormValues({
				bookingType: BookingType.REPLACEMENT
			});
			const existingBookings: UserBookings[] = [
				{
					bookingType: formValues.bookingType,
					from: DateUtils.getUnixTimestampFromDate(formValues.from),
					to: DateUtils.getUnixTimestampFromDate(formValues.to),
					userId: formValues.userId
				}
			];
			const errors = BookingFormCreateValidator.validate(
				formValues,
				existingBookings
			);
			expect(errors.replaceBrand).toBeDefined();
			expect(errors.replaceModel).toBeDefined();
			expect(errors.replaceVin).toBeDefined();
			expect(errors.replacePlateNumber).toBeDefined();
		});
		it("Does not require the replacement vehicle fields when a booking is NOT a replacement type.", () => {});
	});
	it("Gives an error on empty required fields.", () => {
		const errors = BookingFormCreateValidator.validate({}, []);

		expect(errors.from).toBeDefined();
		expect(errors.to).toBeDefined();
		expect(errors.userId).toBeDefined();
		expect(errors.bookingType).toBeDefined();
		expect(errors.locationId).toBeDefined();
		expect(errors.vehicleId).toBeDefined();
	});
	it("Does not give any errors on valid values", () => {
		const formValues = BookingFormUtils.createBookingFormValues();
		const errors = BookingFormCreateValidator.validate(formValues, []);
		expect(Object.values(errors)).toHaveLength(0);
	});
});
