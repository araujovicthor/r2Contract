const fs = require("fs");
const createPDF = require("./src/createPDF");
const mustache = require("mustache");

const dir = "./bib/contrato-v1.html";
const html = fs.readFileSync(dir, "utf8");

let data = {
  locatario:
    "Erlan Rodrigo de Souza Cassiano, CPF: 123.456.789-00, CNH: 134567890",
  morador:
    "Erlan Rodrigo de Souza Cassiano, CPF: 123.456.789-00, CNH: 134567890",
  locador:
    "Rodrigo Erlan de Souza Cassiano, CPF: 123.456.789-00, CNH: 134567890",
  imobiliaria:
    "QUINTO ANDAR SERVICOS IMOBILIARIOS LTDA, CNPJ: 16.788.643/0001-81, CRECI: J24.344, sediada na Rua Bela Cintra, 1149 13o andar, Consolação, São Paulo - SP, 01415907. Central de atendimento disponível através do email atendimento@quintoandar.com.br ou do telefone 4000-1161",
  garantidor:
    "QUINTO ANDAR SERVICOS IMOBILIARIOS LTDA, CNPJ: 16.788.643/0001-81, CRECI: J24.344, sediada na Rua Bela Cintra, 1149 13o andar, Consolação, São Paulo - SP, 01415907. Central de atendimento disponível através do email atendimento@quintoandar.com.br ou do telefone 4000-1161",
  imovel:
    "Apartamento 1234 localizado à R12 Norte, Águas Claras (Norte), Águas Claras-DF, CEP: 70000-000. Vaga de garagem: 2 Cadastrado no RuaDoisa sob o código twoib83ymp. Alugado mediante Contrato de Locação mg375d8y3. Animais não são permitidos no imóvel pelo Locador",
  locacao:
    "Contrato de locação por tempo determinado, com duração de 30 (trinta) meses. Data de início da locação: 08/10/2018. Data do término da locação: 08/04/2021.",
  primeiroVencimento:
    "Aluguel e Encargos Legais: dia 13/10/2018. *Os próximos meses terão a emissão de fatura única com vencimento no dia 7 e serão referentes ao mês vigente.",
  indexador:
    "Para cálculo de reajustes no valor do aluguel e de correção monetária de eventuais débitos, será utilizado o índice IGPM/FGV. Na hipótese de extinção desse indexador, será adotado o IGP/FGV e, na inaplicabilidade deste, o IPC/FIPE ou o índice que o governo vier a indicar.",
  valores:
    "Aluguel inicial: R$ 3.200 (três mil e duzentos reais) por mês. Condomínio Total - Aproximadamente: R$ 516 (quinhentos e dezesseis reais) por mês IPTU: R$ 38 (trinta e oito reais) por mês. Seguro Contra Incêndio: R$ 12 (doze reais) por mês. * Aplicável a imóveis que estejam ou passem a fazer parte de condomínio. * Os valores de condomínio extraordinário, conforme Lei do Inquilinato, são de responsabilidade de pagamento do LOCADOR. O LOCATÁRIO será responsável por efetuar o pagamento do boleto integral de condomínio, e será reembolsado nos termos da cláusula 3. * O LOCADOR se responsabiliza de que os dados acima informados são referentes a última parcela cobrada dos valores de condomínio e do valor atual do IPTU. * O LOCATÁRIO está de acordo de que os dados acima informados são para referência. Estes são calculados por terceiros e estão sujeitos a alterações fora do controle do LOCADOR e da IMOBILIÁRIA. Caso ocorra esta diferença o LOCATÁRIO se responsabiliza por seu pagamento integral."
};

let output = mustache.to_html(html, data);

createPDF.generate(output);
