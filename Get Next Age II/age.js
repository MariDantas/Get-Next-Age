/**
 * @param {string} age
 */
export function getNextAge(age) {
    if (age === ""){
        return 0;
    }
    return (Number.parseInt(age, 10)) + 1;
}
