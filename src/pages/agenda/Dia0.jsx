import React from "react";

export default function Dia0() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">✅ Dia 0 – Checklist Pré-Embarque</h2>

      <section className="mb-4">
        <h3 className="font-semibold text-lg">📋 Checklist geral</h3>
        <ul className="list-disc list-inside">
          <li>Passaportes em mãos</li>
          <li>Vistos conferidos (validação e validade)</li>
          <li>Passagens conferidas (datas, horários e assentos)</li>
          <li>Check-in feito ou agendado</li>
          <li>Cartões internacionais ativados</li>
          <li>Seguro viagem e documentos impressos/digitalizados</li>
          <li>Organizar medicamentos essenciais</li>
        </ul>
      </section>

      <section className="mb-4">
        <h3 className="font-semibold text-lg">📲 Apps úteis para instalar</h3>
        <ul className="list-disc list-inside">
          <li>Google Maps (GPS e rotas)</li>
          <li>Waze (trânsito e velocidade)</li>
          <li>Uber / Lyft</li>
          <li>Disney Experience</li>
          <li>Universal Orlando</li>
          <li>Target, Ross, Walmart</li>
          <li>ParkMobile (estacionamentos)</li>
          <li>XE Currency (câmbio)</li>
        </ul>
      </section>

      <section className="mb-4">
        <h3 className="font-semibold text-lg">🧳 Organização das malas</h3>
        <ul className="list-disc list-inside">
          <li>Roupas leves para o calor (camisetas, bermudas, vestidos)</li>
          <li>Roupas de piscina e chinelo</li>
          <li>Agasalho leve para noites com ar-condicionado</li>
          <li>Calçados confortáveis para parque (tênis e sandália)</li>
          <li>Remédios (em bagagem de mão e despachada)</li>
          <li>Documentos e dinheiro trocado em bolsa de fácil acesso</li>
        </ul>
      </section>

      <section className="mb-4">
        <h3 className="font-semibold text-lg">💡 Dicas rápidas</h3>
        <ul className="list-disc list-inside">
          <li>Deixe etiquetas em todas as malas</li>
          <li>Use pasta plástica com zíper para documentos</li>
          <li>Crie um grupo de WhatsApp para atualizações da viagem</li>
          <li>Leve carregador portátil e adaptador de tomada</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-lg">📅 Preparação para o Dia 1</h3>
        <p>
          O voo está previsto para chegar às 6h em Miami. Descansem bem na noite anterior, deixem tudo pronto com check-in feito e documentos na bolsa de mão. Ao acordar, só pegar as malas e partir para o aeroporto com tranquilidade.
        </p>
      </section>
    </div>
  );
}
