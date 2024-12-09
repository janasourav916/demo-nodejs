export default function handleError(error, req, res, next) {
  const status = error.status || 500;
  const message = error.message || "Server Error";
  res.status(status).json({ error: message });
  next();
}
