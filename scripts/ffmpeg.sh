#!/bin/bash

TARGET_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"/../public/images
if [ ! -d "$TARGET_DIR" ]; then
	echo "Error: Target directory '$TARGET_DIR' does not exist."
	exit 1
fi
find "$TARGET_DIR" -type f -name "*.gif" | while read -r file; do
	# tmp_file="${file%.gif}_tmp.gif"
	output_file="${file%.gif}.webp"
	# echo "Resizing '$file' to '$tmp_file'..."
	# convert "$file" -resize 90% "$tmp_file"
	# if [ $? -ne 0 ]; then
	# 	echo "Failed to resize: '$file'"
	# 	continue
	# fi
	# echo "Converting '$tmp_file' to '$output_file'..."
	echo "Converting '$file' to '$output_file'..."
	# gif2webp "$tmp_file" -o "$output_file"
	# ffmpeg -i "$tmp_file" -r 10 -compression_level 9 "$output_file" -y
	ffmpeg -i "$file" -r 10 -loop 0 -compression_level 9 "$output_file" -y
	if [ $? -eq 0 ]; then
		echo "Converted: '$output_file'"
		# rm "$tmp_file"
	else
		echo "Failed to convert: '$tmp_file'"
		# rm "$tmp_file"
	fi
done

echo "All GIF files in '$TARGET_DIR' have been processed."
