CREATE DATABASE grana_inteligente;

use grana_inteligente

-- Categorias
CREATE TABLE categoria (
	categoria_id BIGINT IDENTITY(1,1) NOT NULL,
	descricao_categoria VARCHAR(256) NOT NULL,
	tipo_categoria NVARCHAR(MAX),
	CONSTRAINT PRIMARY KEY (categoria_id),
	CONSTRAINT CHECK ([tipo_categoria]='receita' OR [tipo_categoria]='despesa' OR [tipo_categoria]='investimento' OR [tipo_categoria]='outro')
);
-- Moedas
CREATE TABLE moeda (
	moeda_id BIGINT NOT NULL,
	descricao_moeda VARCHAR(5),
	CONSTRAINT PRIMARY KEY (moeda_id)
);
-- Despesas
CREATE TABLE item (
	item_id BIGINT IDENTITY(1,1) NOT NULL,
	descricao_item NVARCHAR(MAX) NOT NULL,
	categoria_pk_id BIGINT NOT NULL,
	CONSTRAINT PRIMARY KEY (despesa_id),
	CONSTRAINT FOREIGN KEY (categoria_pk_id)
);
-- Centro de custos
CREATE TABLE centro_de_custo (
	custo_id BIGINT IDENTITY(1,1) NOT NULL,
	descricao_custo NVARCHAR(MAX) NOT NULL,
	total_receitas BIGINT,
	total_despesas BIGINT,
	total_outros BIGINT,
	total_investimentos BIGINT,
	CONSTRAINT PRIMARY KEY (custo_id)
);
-- Cartão de crédito
CREATE TABLE cartao_de_credito (
	cc_id BIGINT IDENTITY(1,1) NOT NULL,
	descricao_cc NVARCHAR(MAX) NOT NULL,
	fechamento DATE NOT NULL,
	vencimento DATE NOT NULL,
	limite BIGINT NOT NULL,
	moeda_pk_id BIGINT NOT NULL,
	lancamento BIGINT NOT NULL,
	disponivel BIGINT NOT NULL,
	CONSTRAINT PRIMARY KEY (cc_id),
	CONTRAINT FOREIGN KEY (moeda_pk_id)
);
-- Contas (Carteira e banco)
CREATE TABLE conta (
	conta_id BIGINT NOT NULL,
	descricao_conta NVARCHAR(MAX) NOT NULL,
	saldo_inicial BIGINT,
	moeda_pk_id BIGINT NOT NULL,
	posicao INT NOT NULL,
	cambio BIGINT NOT NULL,
	recebido BIGINT NOT NULL,
	pago BIGINT NOT NULL,
	saldo_atual BIGINT,
	receber BIGINT,
	pagar BIGINT,
	saldo_projetado BIGINT,
	CONTRAINT PRIMARY KEY (conta_id),
	CONTRAINT FOREIGN KEY (moeda_pk_id)
);