export default function StatsBox({ label = 'Stat', value = '0' }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
      <div className="text-3xl font-bold text-gray-800">{value}</div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );
}