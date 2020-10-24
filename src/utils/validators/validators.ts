
type ValidatorType = (value: string) => string | undefined

export const composeValidators = (...validators: ValidatorType[])  => (value: string) =>
  validators.reduce<string | undefined>((error, validator) => error || validator(value), undefined);

export const requieredField: ValidatorType = (value: string) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLengthCreator  = (maxLength: number): ValidatorType => (value: string) => {
  if (value.length > maxLength) {
    return `Maximum length is ${maxLength} symbols`;
  }

  return undefined;
};
