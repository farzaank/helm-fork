export default function getBenchmarkSuite(): string {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  return String(window.SUITE);
}
