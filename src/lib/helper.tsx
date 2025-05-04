export function formatString(
  input: string,
  symbolsToReplace: string[],
  caseOption: "capital" | "small" | "heading"
): string {
  let formatted = input;

  // Replace all specified symbols with a space
  for (const symbol of symbolsToReplace) {
    const regex = new RegExp(`\\${symbol}`, "g"); // escape special chars
    formatted = formatted.replace(regex, " ");
  }

  // Trim extra spaces
  formatted = formatted.trim().replace(/\s+/g, " ");

  // Apply case formatting
  if (caseOption === "capital") {
    return formatted.toUpperCase();
  } else if (caseOption === "small") {
    return formatted.toLowerCase();
  } else if (caseOption === "heading") {
    return formatted
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return formatted;
}
