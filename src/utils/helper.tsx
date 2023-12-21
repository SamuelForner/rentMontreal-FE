export default function isEmpty(value: any) {
  if (typeof value === 'string' && value.length === 0) {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

export function isNotEmpty(value: any) {
  if (isEmpty(value) === false) {
    return true;
  } else {
    return false;
  }
}
