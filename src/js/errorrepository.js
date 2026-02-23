export class ErrorRepository {

  static errors = new Map([
    [1, "Ошибка 1"],
    [2, "Ошибка 2"],
    [2, "Ошибка 2"],
  ]);

  static translate(code) {
    if (!ErrorRepository.errors.has(code)) {
      throw new Error(`Error whit code: ${code} doesn't exist`);
    }
    return ErrorRepository.errors.get(code);
  }
}