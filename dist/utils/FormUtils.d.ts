import { ServerResponseMeta } from "car-rental-management-shared";
export declare type FieldErrors<Values extends object> = Partial<Record<keyof Values, string>>;
export interface AxiosError<T> extends Error {
    response?: {
        data: T;
    };
    isAxiosError: boolean;
}
export declare abstract class FormUtils {
    static getFieldErrorsFromYupValidationError: <Values extends object>(errors: Error, existingError?: Partial<Record<keyof Values, string>>) => {};
    static getErrorsFromApiError: <Values extends object>(e: AxiosError<ServerResponseMeta> | Error) => {
        field: Partial<Record<keyof Values, string>>;
        form: string[];
    };
    static replaceInvalidNumber: <R>(check: unknown, returnInvalid: R) => number | R;
}
