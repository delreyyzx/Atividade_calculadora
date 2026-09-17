import { useState } from 'react'

import styles from './FormCalculadora.module.css'

function FormCalculadora() {

  // Declaração das variáveis de estado
  const [numero1, setNumero1] = useState('')
  const [numero2, setNumero2] = useState('')
  const [operacao, setOperacao] = useState('+')
  const [resultado, setResultado] = useState(null)

  // Função Limpar
  function limpar() {
    setNumero1('')
    setNumero2('')
    setOperacao('+')
    setResultado(null)
  }

  // Função Calcular
  function calcular(e) {

    // Evita recarregar a página
    e.preventDefault()

    // Transformando os valores em números
    const num1 = parseFloat(numero1)
    const num2 = parseFloat(numero2)

    // Verifica se os campos foram preenchidos
    if (isNaN(num1) || isNaN(num2)) {
      setResultado('Digite dois números válidos.')
      return
    }

    let calculo

    // Verifica qual operação foi escolhida
    if (operacao === '+') {
      calculo = num1 + num2
    } else if (operacao === '-') {
      calculo = num1 - num2
    } else if (operacao === '*') {
      calculo = num1 * num2
    } else if (operacao === '/') {

      // Verifica se está tentando dividir por zero
      if (num2 === 0) {
        setResultado('Não é possível dividir por zero.')
        return
      }

      calculo = num1 / num2
    }

    setResultado(`Resultado: ${calculo}`)
  }

  return (
    <div>
      <form
        onSubmit={calcular}
        className={styles.formContainer}
      >

        <h2>Calculadora Simples 🧮</h2>

        {/* Primeiro número */}
        <div className={styles.numero}>
          <input
            type="text"
            name="numero1"
            placeholder="Informe o primeiro número..."
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />
        </div>

        {/* Segundo número */}
        <div className={styles.numero}>
          <input
            type="text"
            name="numero2"
            placeholder="Informe o segundo número..."
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
        </div>

        {/* Operação */}
        <div className={styles.operacao}>
          <select
            value={operacao}
            onChange={(e) => setOperacao(e.target.value)}
          >
            <option value="+">Adição (+)</option>
            <option value="-">Subtração (-)</option>
            <option value="*">Multiplicação (*)</option>
            <option value="/">Divisão (/)</option>
          </select>
        </div>

        {/* Botões */}
        <div className={styles.btn}>
          <input
            type="submit"
            value="Calcular"
          />

          <input
            type="button"
            value="Limpar"
            onClick={limpar}
          />
        </div>

        {/* Resultado */}
        <div className={styles.resultado}>
          <p>{resultado}</p>
        </div>

      </form>
    </div>
  )
}

export default FormCalculadora