CREATE DATABASE grana_inteligente;

use grana_inteligente

-- Categorias
CREATE TABLE categoria (
	categoria_id INT GENERATED ALWAYS AS IDENTITY,
	descricao_categoria VARCHAR(256) NOT NULL,
	tipo_categoria NVARCHAR(MAX),
    categoria_id_referencia INT,
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
	fechamento  INT NOT NULL,
	vencimento INT NOT NULL,
	limite NUMERIC NOT NULL,
    moeda VARCHAR(5),
	lancamento NUMERIC NOT NULL,
	disponivel NUMERIC NOT NULL,
	CONSTRAINT PRIMARY KEY (cc_id)
);
-- Contas (Carteira e banco)
CREATE TABLE conta (
	conta_id INT NOT NULL,
	descricao_conta NVARCHAR(MAX) NOT NULL,
	saldo_inicial NUMERIC,
	moeda VARCHAR(5),
	posicao INT NOT NULL,
	cambio NUMERIC NOT NULL,
	recebido NUMERIC NOT NULL,
	pago NUMERIC NOT NULL,
	saldo_atual NUMERIC,
	receber NUMERIC,
	pagar NUMERIC,
	saldo_projetado NUMERIC,
	CONTRAINT PRIMARY KEY (conta_id)
);