
import 'bootstrap/dist/css/bootstrap.min.css';

export default function StatsBox({ label = 'Stat', value = '0' }) {
  return (
    <div className="card text-center shadow-sm border-0 bg-light p-3">
      <div className="card-body">
        <h3 className="display-6 fw-bold text-dark mb-1">{value}</h3>
        <p className="text-muted small mb-0">{label}</p>
      </div>
    </div>
  );
}
