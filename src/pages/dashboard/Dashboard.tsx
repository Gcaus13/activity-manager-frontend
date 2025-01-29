import React from "react";

const Dashboard = () => {
  const totalPoints = 25;
  const totalHours = 75; // em horas
  const totalDaysWorked = 20;

  const recentEntry = {
    name: "Reunião com equipe",
    start: "2025-01-20 09:00",
    end: "2025-01-20 10:30",
    duration: "1h 30min",
  };
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <header className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div>
            
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Logout
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Resumo Geral */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Resumo Geral</h2>
            <p>
              Total de Apontamentos: <strong>{totalPoints}</strong>
            </p>
            <p>
              Horas Trabalhadas: <strong>{totalHours} horas</strong>
            </p>
            <p>
              Dias Trabalhados: <strong>{totalDaysWorked}</strong>
            </p>
          </div>

          {/* Apontamento Mais Recente */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">
              Apontamento Mais Recente
            </h2>
            <p>
              <strong>Atividade:</strong> {recentEntry.name}
            </p>
            <p>
              <strong>Início:</strong> {recentEntry.start}
            </p>
            <p>
              <strong>Fim:</strong> {recentEntry.end}
            </p>
            <p>
              <strong>Duração:</strong> {recentEntry.duration}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
