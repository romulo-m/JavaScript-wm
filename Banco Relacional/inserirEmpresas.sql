
ALTER TABLE empresas MODIFY cnpj VARCHAR(15);

INSERT INTO empresas 
    (nome, cnpj)
VALUES 
    ('Bradesco', 984549655161),
    ('Vale', 278787987545),
    ('Cielo', 0159898454548);


desc empresas;  -- descrever a tabela
desc prefeitos;