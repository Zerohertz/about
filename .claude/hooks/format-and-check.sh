#!/bin/bash

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // .tool_input.filePath // empty')

# Only process TypeScript/JavaScript files
if [[ ! "$FILE_PATH" =~ \.(ts|tsx|js|jsx)$ ]] || [[ ! -f "$FILE_PATH" ]]; then
	exit 0
fi

echo "🔧 Running project-specific format and check for TypeScript/JavaScript files..."

# Run ESLint with auto-fix
if npx eslint src --fix; then
	echo "✅ ESLint format and check completed"
else
	echo "❌ ESLint check failed" >&2
	exit 2
fi

exit 0
