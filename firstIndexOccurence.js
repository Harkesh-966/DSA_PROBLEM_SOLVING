const firstIndexOccurence = (haystack, needle) => {
	for (let i = 0; i <= haystack.length - needle.length; i++) {
		let j;
		for (j = 0; j < needle.length; j++) {
				if (haystack[i + j] !== needle[j]) {
						break;
				}
		}
		if (j === needle.length) {
				return i; // Found the needle at index i
		}
}
return -1; // Needle not found
}
firstIndexOccurence("leetcode","leeto")