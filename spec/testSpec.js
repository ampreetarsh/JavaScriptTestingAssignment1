//1
describe('test of positive numbers', function () {
    it('should return the sum of all positive numbers', function () {
        expect(positiveSum([2, 3, 1])).toBe(6);
    })

    it('should not include the negative number as part of sum', function () {
        expect(positiveSum([2, -3, 4])).toBe(6);
    })

    it('should return 0 when an array is empty', function () {
        expect(positiveSum([])).toBe(0);
    })

    it('should return 0 when all numbers in array are negative', function () {
        expect(positiveSum([-2, -3, -1])).toBe(0);
    })
})


//2
describe('divisible number', function () {
    it('should return true when number is devisible by both divisors', function () {
        expect(isDivisible(20, 10, 5)).toBe(true);
    })

    it('should return false when number is smaller than both divisors', function () {
        expect(isDivisible(5, 10, 20)).toBe(false);
    })

    it('should false when number is not divisible by any one of divisors', function () {
        expect(isDivisible(15, 7, 6)).toBe(false);
    })

    it('should false when number is not divisible by both numbers', function () {
        expect(isDivisible(10, 5, 9)).toBe(false);
    })

})


//3
describe('String', function () {
    it('should return the character itself when there is only one character in the string', function () {
        expect(solution('a')).toBe('a');
    })

    it('should return the reversed string of the provided string', function () {
        expect(solution('Arsh')).toBe('hsrA');
    })

    it('should return an empty string when there are no characters in the string', function () {
        expect(solution('')).toBe('');
    })
})


//4
describe('push number to arrays', function () {
    it('should only take numbers as arguments', function () {
        expect(reverseSeq('s')).toEqual([]);
    })

    it('should return push the number in array and return the array', function () {
        expect(reverseSeq(3)).toEqual([3, 2, 1]);
    })

    it('should return empty array when nothing is passed as argument', function () {
        expect(reverseSeq()).toEqual([]);
    })

})