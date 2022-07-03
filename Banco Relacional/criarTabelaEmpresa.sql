CREATE TABLE IF NOT EXISTS empresas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cnpj int UNSIGNED,
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
);

-- cidades_empresas

CREATE TABLE IF NOT EXISTS empresas_unidades (
    empresa_id INT UNSGINED NOT NULL,
    cidade_id INT UNSIGNED NOT NULL,
    sede TINYINT(1) NOT NULL, -- 0 pra V e 1 pra F
    PRIMARY KEY (empresa_id, cidade_id)
);