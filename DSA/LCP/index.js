// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// <------------------------------------------------------------------------------------------>


// Answe and understanding the problem

// Analyze the Examples (Walkthrough)
// The examples are the most valuable part of the prompt. They confirm your understanding of the logic.

// Example 1: strs = ["flower", "flow", "flight"]
// Start at the first character (Index 0):

// f from "flower"

// f from "flow"

// f from "flight"

// They all match. LCP is now "f".

// Move to the second character (Index 1):

// l from "flower"

// l from "flow"

// l from "flight"

// They all match. LCP is now "fl".

// Move to the third character (Index 2):

// o from "flower"

// o from "flow"

// i from "flight"

// Mismatch! The common prefix stops right before this character.

// Result: "fl"

// Example 2: strs = ["dog", "racecar", "car"]
// Start at the first character (Index 0):

// d from "dog"

// r from "racecar"

// c from "car"

// Mismatch!

// Result: Since the very first characters don't match, the LCP is the empty string "".

// 3. Develop an Algorithm Strategy
// Once you understand what the output should be, you can devise how to calculate it. For prefix-finding problems, the most intuitive method is usually vertical scanning or horizontal scanning.

// Strategy: Vertical Scanning (Character by Character)
// This is the most common and often easiest approach for LCP. The logic is: "Let's check the first character of all strings, then the second character of all strings, and so on."

// Handle Edge Cases: If the input array strs is empty, return "".

// Choose a Base String: Pick the first string (strs[0]) as your reference. You will iterate over the characters of this string.

// Outer Loop (Character Index i): Iterate through the characters of the reference string (strs[0]).

// Inner Loop (Array Index j): For each character i in the reference string, check if the character at position i matches in every other string (strs[j]).

// Stopping Condition 1 (Length): If you reach the end of any string (strs[j].length == i), you've found the LCP.

// Stopping Condition 2 (Mismatch): If the character at strs[j][i] is different from strs[0][i], you've found the LCP.

// Return: If you break the loop for any reason, the LCP is the substring of the first string up to the current index i.