/**
 * Molduras para capturas de tela: navegador (web) e celular (mobile).
 * Se `src` estiver vazio, exibe uma prévia ilustrativa (esqueleto de interface).
 */
const IS_DEV = import.meta.env.DEV;

function WebSkeleton() {
  return (
    <div className="skeleton skeleton-web" aria-hidden="true">
      <div className="sk-sidebar">
        <i className="sk-logo" />
        <i /><i /><i className="is-on" /><i />
      </div>
      <div className="sk-main">
        <div className="sk-row sk-toolbar">
          <i className="w40" />
          <i className="w15 accent" />
        </div>
        <div className="sk-stats">
          <i /><i /><i />
        </div>
        <div className="sk-table">
          {[0, 1, 2, 3, 4].map((r) => (
            <div className="sk-tr" key={r}>
              <i className="w30" /><i className="w20" /><i className="w15" />
              <i className={`pill ${r % 2 ? 'pill-a' : 'pill-b'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileSkeleton() {
  return (
    <div className="skeleton skeleton-mobile" aria-hidden="true">
      <i className="w50 strong" />
      <i className="w80" />
      <div className="sk-photos">
        <i /><i /><i /><i />
      </div>
      <i className="w70" />
      <i className="w60" />
      <i className="sk-btn" />
    </div>
  );
}

function Placeholder({ kind, hint }) {
  return (
    <>
      {kind === 'web' ? <WebSkeleton /> : <MobileSkeleton />}
      <span className="frame-caption">
        {IS_DEV ? hint : 'Prévia ilustrativa'}
      </span>
    </>
  );
}

export function BrowserFrame({ src, alt, hint }) {
  return (
    <figure className="frame frame-browser">
      <div className="frame-browser-bar" aria-hidden="true">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span className="frame-url" />
      </div>
      <div className="frame-screen">
        {src ? (
          <img src={src} alt={alt} loading="lazy" decoding="async" />
        ) : (
          <Placeholder kind="web" hint={hint} />
        )}
      </div>
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}

export function PhoneFrame({ src, alt, hint }) {
  return (
    <figure className="frame frame-phone">
      <div className="frame-phone-notch" aria-hidden="true" />
      <div className="frame-screen">
        {src ? (
          <img src={src} alt={alt} loading="lazy" decoding="async" />
        ) : (
          <Placeholder kind="mobile" hint={hint} />
        )}
      </div>
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}
