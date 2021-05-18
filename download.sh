#!/bin/bash
filename='anime.txt'
n=1
while read line; do
# reading each line
mkdir $line
twist-dl --anime "$line" --output "$line"
n=$((n+1))
done < $filename
