CREATE DATABASE grana_inteligente;

use grana_inteligente

-- Categorias
CREATE TABLE categoria (
	categoria_id INT GENERATED ALWAYS AS IDENTITY,
	descricao_categoria VARCHAR(256) NOT NULL,
	tipo_categoria NVARCHAR(MAX),
	CONSTRAINT PRIMARY KEY (categoria_id),
	CONSTRAINT CHECK ([tipo_categoria]='receita' OR [tipo_categoria]='despesa' OR [tipo_categoria]='investimento' OR [tipo_categoria]='outro')
);
-- Moedas
-- CREATE TABLE moeda (
-- 	moeda_id INT NOT NULL,
-- 	descricao_moeda VARCHAR(5),
-- 	CONSTRAINT PRIMARY KEY (moeda_id)
-- );
-- Despesas
-- CREATE TABLE item (
-- 	item_id INT GENERATED ALWAYS AS IDENTITY,
-- 	descricao_item NVARCHAR(MAX) NOT NULL,
-- 	categoria_pk_id INT NOT NULL,
-- 	CONSTRAINT PRIMARY KEY (despesa_id),
-- 	CONSTRAINT FOREIGN KEY (categoria_pk_id)
-- );
-- Centro de custos
-- CREATE TABLE centro_de_custo (
-- 	custo_id INT GENERATED ALWAYS AS IDENTITY,
-- 	descricao_custo NVARCHAR(MAX) NOT NULL,
-- 	total_receitas INT,
-- 	total_despesas INT,
-- 	total_outros INT,
-- 	total_investimentos INT,
-- 	CONSTRAINT PRIMARY KEY (custo_id)
-- );
-- Cartão de crédito
CREATE TABLE cartao_de_credito (
	cc_id INT GENERATED ALWAYS AS IDENTITY,
	descricao_cc NVARCHAR(MAX) NOT NULL,
	fechamento DATE NOT NULL,
	vencimento DATE NOT NULL,
	limite INT NOT NULL,
    moeda VARCHAR(5),
	lancamento INT NOT NULL,
	disponivel INT NOT NULL,
	CONSTRAINT PRIMARY KEY (cc_id)
);
-- Contas (Carteira e banco)
CREATE TABLE conta (
	conta_id INT NOT NULL,
	descricao_conta NVARCHAR(MAX) NOT NULL,
	saldo_inicial INT,
	moeda VARCHAR(5),
	posicao INT NOT NULL,
	cambio INT NOT NULL,
	recebido INT NOT NULL,
	pago INT NOT NULL,
	saldo_atual INT,
	receber INT,
	pagar INT,
	saldo_projetado INT,
	CONTRAINT PRIMARY KEY (conta_id)
);