function isLeapYear(year) {
    return !isCommonYear(year);
}
function isCommonYear(year) {
    return year % 4 != 0 || (year % 100 == 0 && year % 400 != 0);
}

function unitTests() {
  describe("leapYear tests", function() {
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(1971)).toBe(false);
    expect(isLeapYear(1972)).toBe(true);
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(2003)).toBe(false);
  });
}

function describe(testName, tests) {
    var groupTitle = 'Name: '+testName+' - Start: '+(new Date).toISOString();
    console.group(groupTitle);
    expect.nr = 0;
    expect.errors = 0;
    tests();
    if (expect.errors == 0) console.info('All %s tests OK', expect.nr);
    else console.error('%s of %s tests failed', expect.errors, expect.nr);
    console.groupEnd(groupTitle);
}

function expect(x) {
    return {
        toBe: function(y) {
            if (x === y) console.info("%s: OK 👍", expect.nr++);
            else console.error("%s: Error 👹", expect.nr++), expect.errors++;
        }
    };
}
