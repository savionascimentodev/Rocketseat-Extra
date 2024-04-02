export function AttendeeList() {
  return (
    <div className="flex gap-3 items-center">
      <h1 className="text-2xl font-bold">Participantes</h1>
      <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm flex items-center">
        <input
          className="bg-transparent flex-1"
          placeholder="Buscar participantes..."
        />
      </div>
    </div>
  )
}
