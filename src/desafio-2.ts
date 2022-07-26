enum profissao {
  Atriz,
  Padeiro,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao: profissao;
}

let pessoa1: Pessoa = {
  nome: "maria",
  idade: 29,
  profissao: profissao.Atriz,
};

let pessoa2: Pessoa = {
  nome: "roberto",
  idade: 19,
  profissao: profissao.Padeiro,
};

let pessoa3: Pessoa = {
  nome: "laura",
  idade: 32,
  profissao: profissao.Atriz,
};

let pessoa4: Pessoa = {
  nome: "carlos",
  idade: 19,
  profissao: profissao.Padeiro,
};
