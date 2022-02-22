interface ICountPropertiesFromObjectArray<T> {
  obj: T[];
  property: keyof T;
  value: unknown;
}

export default function countPropertiesFromObjectArray<T>({
  obj,
  property,
  value,
}: ICountPropertiesFromObjectArray<T>): number {
  return obj.reduce((acc, curr) => {
    if (curr[property] === value) {
      const newValue = acc + 1;
      return newValue;
    }
    return acc;
  }, 0);
}
