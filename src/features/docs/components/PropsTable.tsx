interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropDefinition[];
}

/**
 * Props Table Component
 *
 * Displays component props in a table format
 */
export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
              Prop
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
              Type
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
              Default
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {props.map((prop) => (
            <tr key={prop.name} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm">
                <code className="text-primary-600 font-mono">
                  {prop.name}
                  {prop.required && <span className="text-red-600">*</span>}
                </code>
              </td>
              <td className="px-4 py-3 text-sm">
                <code className="text-gray-700 font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-3 text-sm">
                {prop.default ? (
                  <code className="text-gray-700 font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
