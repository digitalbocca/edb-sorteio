'use strict'

/**
 * Realiza o sorteio de um número inteiro, limitado ao valor passado por parâmetro.
 *
 * @copyright (c)2018-2019 Estúdio Digital Bocca - https://estudiodigitalbocca.com.br/
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @since v0.3.0
 * @version v4.0.0
 *
 * @param {int} limite - O número máximo que será sorteado.
 * @return {int} Número sorteado.
 */
const sorteio = limite => Math.ceil(Math.random() * limite)

const emUm = sorteio

const emZero = limite => Math.floor(Math.random() * limite)

export default sorteio

export { emUm, emZero }
