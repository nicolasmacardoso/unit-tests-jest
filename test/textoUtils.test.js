const TextoUtils = require("../src/textoUtils");
const textoUtilsObj = new TextoUtils();

test("Deve inverter uma string", async () => {
  expect(textoUtilsObj.inverter("string")).toStrictEqual("gnirts");
});

test("Deve retornar se uma string é palíndromo", async () => {
  expect(textoUtilsObj.ehPalindromo("ovo")).toStrictEqual(true);
});
test("Deve capitalizar uma string", async () => {
  expect(textoUtilsObj.capitalizar("string")).toStrictEqual("String");
});
test("Deve contar ocorrências em uma string", async () => {
  expect(textoUtilsObj.contarOcorrencias("striiing", "i")).toStrictEqual(3);
});
test("Deve remover espacos extras uma string", async () => {
  expect(textoUtilsObj.removerEspacosExtras("  string ")).toStrictEqual("string");
});
test("Deve converter uma string em slug", async () => {
  expect(textoUtilsObj.paraSlug("Str ing!")).toStrictEqual("str-ing");
});
test("Deve truncar uma string", async () => {
  expect(textoUtilsObj.truncar("string", 2)).toStrictEqual("st...");
});
test("Deve retornar erro ao truncar string com número negativo", async () => {
  expect(() => textoUtilsObj.truncar("string", -2)).toThrow("O tamanho não pode ser negativo");
});
test("Deve contar palavras em uma string", async () => {
  expect(textoUtilsObj.contarPalavras("string string string")).toStrictEqual(3);
});
test("Deve retornar se uma string só possui letras", async () => {
  expect(textoUtilsObj.somenteLetras("12345string")).toStrictEqual(false);
});
test("Deve substituir tudo de uma string", async () => {
  expect(textoUtilsObj.substituirTudo("string", "str", "STR")).toStrictEqual("STRing");
});
test("Deve retornar erro ao substituir tudo de uma string vazia", async () => {
  expect(() => textoUtilsObj.substituirTudo("str", "", "string")).toThrow("O alvo não pode ser vazio");
});