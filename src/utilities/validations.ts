export const inBetweenTwoLetter =
  /^[a-zA-Z0-9]+([ &()'_-][a-zA-Z0-9]+)*[a-zA-Z0-9]$/; //Only when there's a minimum of 2 letters.

export const inBetweenOneLetter = /^[a-zA-Z0-9]+([ &()'_-]?[a-zA-Z0-9.])*$/;

export const isValidName = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;

export const containsNumbers = /\d/;

export const allowFullStop =
  /^[a-zA-Z0-9]+([ &'().,-][a-zA-Z0-9. ]+)*[a-zA-Z0-9.]$/;

export const correctEmail =
  /^[a-zA-Z0-9]+([._'\-+&][a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

export const validateEmail = (value: string) => {
  if (value) {
    const valid = value.match(correctEmail);
    if (!valid) {
      return "Email address must be a valid Email";
    }
  }
  return true;
};

export const validateLettersAndWords = (inputText: string) => {
  return /^[a-zA-Z\s]*$/.test(inputText); // True if it contains only letters and false if it contains special characters and digits
};

export const validateCompoundName = (value: string) => {
  if (value) {
    // Check if the value contains numbers
    if (containsNumbers.test(value)) {
      return "The name must not contain numbers.";
    }

    // Check if the value matches the regular expression
    const hasTwoWords = value.match(inBetweenOneLetter);

    if (!hasTwoWords) {
      return "Spaces and special characters must not start or end a word.";
    }
  }
  return true;
};

export const validateName = (value: string) => {
  if (value) {
    if (!isValidName.test(value)) {
      return "Name must contain only letters.";
    }
  }
  return true;
};

export const handleKeyDown = (
  event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  if (!/^[a-zA-Z0-9-_'()& ]+$/.test(event.key)) {
    event.preventDefault();
  }
};

export const handleKeyDownWithPeriod = (
  event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  if (!/^[a-zA-Z0-9-_'/()&. ]+$/.test(event.key)) {
    event.preventDefault();
  }
};

export const handleKeyDownStrict = (
  event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  if (!/^[a-zA-Z0-9-' ]+$/.test(event.key)) {
    event.preventDefault();
  }
};

export const handleKeyDownNumbers = (
  event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const isNumber = /^[0-9]$/.test(event.key);
  const isArrowKey = /^Arrow(Left|Right)$/.test(event.key);
  const isBackspace = event.key === "Backspace";

  const isCtrlAction =
    (event.key === "v" && event.ctrlKey === true && !event.metaKey) ||
    (event.key === "c" && event.ctrlKey === true && !event.metaKey) ||
    (event.key === "x" && event.ctrlKey === true && !event.metaKey) ||
    (event.key === "z" && event.ctrlKey === true && !event.metaKey);

  if (!(isNumber || isBackspace || isArrowKey || isCtrlAction)) {
    event.preventDefault();
  }
};

export const handleKeyDownDecimals = (
  event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement;

  const hasDecimalPoint = target.value?.includes(".");
  const isDecimalPoint = event.key === ".";
  const isNumber = /^[0-9]$/.test(event.key);
  const isArrowKey = /^Arrow(Left|Right)$/.test(event.key);
  const isBackspace = event.key === "Backspace";
  const isCtrlAction =
    (event.key === "v" && event.ctrlKey === true && !event.metaKey) ||
    (event.key === "c" && event.ctrlKey === true && !event.metaKey) ||
    (event.key === "x" && event.ctrlKey === true && !event.metaKey) ||
    (event.key === "z" && event.ctrlKey === true && !event.metaKey);

  if (
    !(
      isNumber ||
      isBackspace ||
      isArrowKey ||
      isCtrlAction ||
      (isDecimalPoint && !hasDecimalPoint)
    )
  ) {
    event.preventDefault();
  }
};

export const validateNumericCharacterLength = (
  value: string,
  length: number
) => {
  if (value) {
    const isValidNumberLength = new RegExp(`^\\d{${length}}$`);

    return (
      isValidNumberLength.test(value) ||
      `Field must contain exactly ${length} numeric characters`
    );
  }

  return true;
};
