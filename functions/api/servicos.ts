import type { Env, Servico } from '../types'

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const { results } = await env.DB.prepare(
    'SELECT id, nome, empresa, categoria, descricao, contacto FROM servicos WHERE aprovado = 1 ORDER BY categoria, nome'
  ).all<Servico>()

  return Response.json(
    { servicos: results },
    {
      headers: {
        'Cache-Control': 'public, max-age=300',
        'Access-Control-Allow-Origin': '*',
      },
    }
  )
}
