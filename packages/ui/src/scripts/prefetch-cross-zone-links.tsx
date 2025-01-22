import Script from 'next/script.js'

function PrefetchCrossZoneLinks({ hrefs }: { hrefs: string[] }) {
  const speculationRules = {
    prefetch: [{ source: 'list', eagerness: 'moderate', urls: [...hrefs] }],
    prerender: [
      { source: 'list', eagerness: 'conservative', urls: [...hrefs] },
    ],
  }

  return (
    <Script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Speculation Rules API: https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API.
      dangerouslySetInnerHTML={{
        __html: `${JSON.stringify(speculationRules)}`,
      }}
      id="prefetch-cross-zone-links"
      type="speculationrules"
    />
  )
}

export { PrefetchCrossZoneLinks }
