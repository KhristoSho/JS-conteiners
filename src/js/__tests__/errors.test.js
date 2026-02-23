import { ErrorRepository } from "../errorrepository";


test("test error if it exist", () => {

  expect(ErrorRepository.translate(1)).toBe("Ошибка 1");
  
});

test("test error if it doesn't exist", () => {

  expect(() => {
    ErrorRepository.translate(4);
  }).toThrow(`Error whit code: ${4} doesn't exist`);

});