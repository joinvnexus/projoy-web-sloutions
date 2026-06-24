// components/shared/SchemaMarkup.tsx

interface SchemaMarkupProps {
  schema: object | object[];
}

/**
 * Server component — injects JSON-LD schema markup.
 * Pass a single schema object or an array for multiple schemas.
 */
export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s, null, 0) }}
        />
      ))}
    </>
  );
}
