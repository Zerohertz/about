#!/bin/bash

# Script to find ko: followed by en: on the next line pattern
find_ko_en_pattern() {
    local file="$1"
    local line_num=0
    local prev_line=""
    local prev_line_num=0
    
    while IFS= read -r line; do
        ((line_num++))
        
        # Check if previous line contains "ko:" and current line contains "en:"
        if [[ "$prev_line" =~ ko: ]] && [[ "$line" =~ en: ]]; then
            echo "$file:$prev_line_num: $prev_line"
            echo "$file:$line_num: $line"
            echo "---"
        fi
        
        prev_line="$line"
        prev_line_num=$line_num
    done < "$file"
}

# Check all TypeScript files in src/payloads/
for file in src/payloads/*.ts; do
    if [[ -f "$file" ]]; then
        echo "Checking $file..."
        find_ko_en_pattern "$file"
    fi
done