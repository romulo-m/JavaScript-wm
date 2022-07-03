CREATE TABLE IF NOT EXISTS alunos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (curso_id) REFERENCES cursos (id),
    FOREIGN KEY (turma_id) REFERENCES turmas (id)
);

CREATE TABLE IF NOT EXISTS cursos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    duracao VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS facilitador (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (curso_id) REFERENCES cursos (id),
    FOREIGN KEY (turma_id) REFERENCES turmas (id)
);

CREATE TABLE IF NOT EXISTS turmas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (curso_id) REFERENCES cursos (id),
    FOREIGN KEY (facilitador_id) REFERENCES facilitador (id)
);

CREATE TABLE IF NOT EXISTS entregas (
    link VARCHAR(255) NOT NULL,
    modulo VARCHAR(255) NOT NULL,
    conceito VARCHAR(255) NOT NULL,
    FOREIGN KEY (aluno_id) REFERENCES alunos (id),
    FOREIGN KEY (facilitador_id) REFERENCES facilitador (id)
)


INSERT INTO cursos (nome, duracao)
VALUES ('WebDev', '6 meses')
    ('Data Analytics', '6 meses')