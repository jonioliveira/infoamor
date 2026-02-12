CREATE TABLE IF NOT EXISTS servicos (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  nome       TEXT NOT NULL,
  categoria  TEXT NOT NULL,
  descricao  TEXT DEFAULT '',
  contacto   TEXT NOT NULL,
  aprovado   INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_servicos_aprovado ON servicos(aprovado);
CREATE INDEX IF NOT EXISTS idx_servicos_categoria ON servicos(categoria);
