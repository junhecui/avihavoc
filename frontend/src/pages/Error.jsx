import '../styles/Error.css';

export function Error() {
  return (
    <div className="error">
      <div className="error-container">
        <p className="error-bigheader">ERROR.</p>
        <p className="error-littlecaption">The url entered is not valid.</p>
      </div>
    </div>
  );
}
