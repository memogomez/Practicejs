const { suma, resta, invertir, ordenar } = require("./main");

describe("suma", () => {
    
    test("should print 8 if they recieve 5 and 3", () =>{
    const expected = 8;
    const result = suma(5,3);
    expect(expected).toEqual(result);
    });

    test("should print 11 if they recieve 6 and 5", () =>{
        const expected = 11;
        const result = suma(6,5);
        expect(expected).toEqual(result);
        });

    test("should print 2 if they recieve 5 and 3", () =>{
        const expected = 2;
        const result = resta(5,3);
        expect(expected).toEqual(result);
        });

    test("should print inverse string if they receive a string", () =>{
        const expected = 'anitalavalatina';
        const result = invertir('anitalavalatina');
        expect(expected).toEqual(result);
    });

    test("should print sort array if they receive an array", () =>{
        const expected = [1, 2, 5, 8];
        const result = ordenar([5, 1, 2, 8]);
        expect(expected).toEqual(result);
    });

    test("should print 1 if they receive an array of 1 element", () => {
        const expected = [3];
        const result = ordenar([3]);
        expect(expected).toEqual(result);
    })

});