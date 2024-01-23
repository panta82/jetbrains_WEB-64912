export function css(...args) {
  return args.filter(Boolean).join(' ');
}
