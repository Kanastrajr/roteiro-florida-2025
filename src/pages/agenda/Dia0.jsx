import React from "react";

export default function Dia0() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">✅ Dia 0 – Checklist Pré-Embarque</h2>
      <section className="mb-4">
        <h3 className="font-semibold text-lg">📋 Checklist geral</h3>
        <ul className="list-disc list-inside">
          <li>Passaportes em mãos</li>
          <li>Vistos conferidos</li>
          <li>Check-in feito ou agendado</li>
          <li>Cartões ativados para uso internacional</li>
          <li>Seguro viagem impresso e digital</li>
          <li>Medicamentos essenciais</li>
        </ul>
      </section>
      <section className="mb-4">
        <h3 className="font-semibold text-lg">📲 Apps úteis</h3>
        <ul className="list-disc list-inside">
          <li>Google Maps</li>
          <li>Waze</li>
          <li>ParkMobile</li>
          <li>Disney, Universal, Walmart, Target</li>
          <li>XE Currency</li>
        </ul>
      </section>
      <section className="mb-4">
        <h3 className="font-semibold text-lg">🧳 Organização das malas</h3>
        <ul className="list-disc list-inside">
          <li>Roupas leves</li>
          <li>Calçados confortáveis</li>
          <li>Agasalho leve</li>
          <li>Chinelo, trajes de banho</li>
          <li>Adaptadores e carregadores</li>
        </ul>
      </section>
      <section>
        <h3 className="font-semibold text-lg">📅 Preparação para o Dia 1</h3>
        <p>Chegada prevista em Miami às 6h. Tenham uma boa noite de descanso e deixem tudo pronto com documentos na mão.</p>
      </section>
    </div>
  );
}