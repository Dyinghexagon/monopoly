export class ObjectUtil {

    public static toCamelCase<T>(obj: T): T {
        if (typeof obj !== "object" || obj === null) {
            return obj;
        }

        if (Array.isArray(obj)) {
            return obj.map(ObjectUtil.toCamelCase) as unknown as T;
        }

        const camelCaseObj: Record<string, unknown> = {};

        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const camelCaseKey = key.charAt(0).toLowerCase() + key.slice(1);
                camelCaseObj[camelCaseKey] = ObjectUtil.toCamelCase(obj[key]);
            }
        }

        return camelCaseObj as T;
    }

}