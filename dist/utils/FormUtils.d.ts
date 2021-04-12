import { FieldErrors } from "react-form";
import { AxiosError } from "axios";
import { ServerResponseMeta } from "car-rental-management-shared";
export declare abstract class FormUtils {
    static getFieldErrorsFromYupValidationError: <Values extends object>(errors: Error, existingError?: Partial<Record<keyof Values, string>>) => {};
    static getErrorsFromApiError: <Values extends object>(e: AxiosError<ServerResponseMeta> | Error) => {
        field: Partial<Record<keyof Values, string>>;
        form: string[];
    };
    static replaceInvalidNumber: <R>(check: unknown, returnInvalid: R) => number | R;
}
