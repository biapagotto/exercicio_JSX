import React, { useState } from "react";
import "./IMCForm.css";

const IMCForm = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultado, setResultado] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = (e) => {
        e.preventDefault();
        if (altura && peso) {
            // Converte vírgula para ponto
            const alturaEmMetros = parseFloat(altura.replace(',', '.'));
            const pesoEmKg = parseFloat(peso.replace(',', '.'));

            // Verifica se os valores são válidos
            if (isNaN(alturaEmMetros) || isNaN(pesoEmKg) || alturaEmMetros <= 0 || pesoEmKg <= 0) {
                setResultado('Valores inválidos');
                setClassificacao('');
                return;
            }

            // Calcula a altura ao quadrado
            const alturaQuadrado = alturaEmMetros * alturaEmMetros;

            // Calcula o IMC
            const resultadoIMC = pesoEmKg / alturaQuadrado;

            setResultado(resultadoIMC.toFixed(2));
            setClassificacao(classificarIMC(resultadoIMC));
        }
    };

    const classificarIMC = (imc) => {
        if (imc < 17) return 'Muito abaixo do peso';
        if (imc >= 17 && imc < 18.5) return 'Abaixo do peso';
        if (imc >= 18.5 && imc < 25) return 'Peso normal';
        if (imc >= 25 && imc < 30) return 'Acima do peso';
        if (imc >= 30 && imc < 35) return 'Obesidade I';
        if (imc >= 35 && imc < 40) return 'Obesidade II (severa)';
        return 'Obesidade III (mórbida)';
    };

    return (
        <div className="imc-form-container">
            <h1>Calculadora de IMC</h1>
            <form onSubmit={calcularIMC} className="imc-form">
                <div className="input-group">
                    <label>Altura (m):</label>
                    <input
                        type="text"
                        placeholder="Ex: 1,70"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Peso (kg):</label>
                    <input
                        type="text"
                        placeholder="Ex: 70"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="calculate-button">
                    Calcular IMC
                </button>
            </form>
            {resultado && (
                <div className="result">
                    <h2>Seu IMC é: {resultado}</h2>
                    <h3>Classificação: {classificacao}</h3>
                </div>
            )}
        </div>
    );
};

export default IMCForm;
