#!/bin/bash

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // .tool_input.filePath // empty')

# Only review TypeScript/JavaScript files
if [[ ! "$FILE_PATH" =~ \.(ts|tsx|js|jsx)$ ]] || [[ ! -f "$FILE_PATH" ]]; then
	exit 0
fi

echo "🔍 Running Gemini code review for $FILE_PATH..." >&2

# TypeScript/JavaScript-specific review prompt
REVIEW_OUTPUT=$(gemini -p "@$FILE_PATH" "Review this TypeScript/JavaScript code for:
1. TypeScript type safety and interface usage
2. React component patterns and hooks best practices (if applicable)
3. Import/export organization and ESLint rule compliance
4. Security issues (XSS, input validation, etc.)
5. Performance optimizations and unnecessary re-renders
6. Next.js best practices (if applicable)
7. Proper error handling and edge cases
Be concise, only mention important issues." 2>&1)

# Output review to stderr so Claude can see it
echo "$REVIEW_OUTPUT" >&2

# Exit with code 2 so Claude processes the stderr output
exit 2