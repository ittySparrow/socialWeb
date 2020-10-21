
type ValidatorType = (value: string) => any

export const composeValidators = (...validators: Array<ValidatorType>) => (value: string) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const requieredField = (value: string) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLengthCreator = (maxLength: number) => (value: string) => {
  if (value.length > maxLength) {
    return `Maximum length is ${maxLength} symbols`;
  }

  return undefined;
};
