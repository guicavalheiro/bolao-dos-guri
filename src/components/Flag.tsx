export function Flag({ code, className = "" }: { code: string; className?: string }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
      alt=""
      className={`inline-block h-5 w-7 rounded-sm object-cover shadow-sm ${className}`}
      loading="lazy"
    />
  );
}
