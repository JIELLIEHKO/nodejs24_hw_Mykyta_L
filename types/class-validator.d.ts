declare module 'class-validator' {
    export function IsString(): PropertyDecorator;
    export function IsInt(): PropertyDecorator;
    export function IsBoolean(): PropertyDecorator;
    export function Min(min: number): PropertyDecorator;
    export function Validate(): PropertyDecorator;
}