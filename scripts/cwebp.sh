#!/bin/bash

TARGET_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"/../public/images
if [ ! -d "$TARGET_DIR" ]; then
	echo "Error: Target directory '$TARGET_DIR' does not exist."
	exit 1
fi
find "$TARGET_DIR" -type f -name "*.png" | while read -r file; do
	output_file="${file%.png}.webp"
	echo "Converting '$file' to '$output_file'..."
	cwebp "$file" -o "$output_file"
	if [ $? -eq 0 ]; then
		echo "Converted: '$output_file'"
	else
		echo "Failed to convert: '$file'"
	fi
done
echo "All PNG files in '$TARGET_DIR' have been processed."
