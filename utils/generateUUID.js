import { v4 as uuidv4 } from "uuid"

export function generateUUID(size) {
  if (size <= 0) {
    throw new Error("Size must be a positive number.")
  }

  let numericUuid = ""

  // Generate the numeric part ensuring it does not start with zero
  do {
    let uuid = uuidv4()
    numericUuid = uuid.replace(/\D/g, "")
  } while (numericUuid[0] === "0")

  // Continue adding numeric parts until the desired size is reached
  while (numericUuid.length < size) {
    numericUuid += uuidv4().replace(/\D/g, "")
  }

  const code = numericUuid.substring(0, size)
  return code
}
