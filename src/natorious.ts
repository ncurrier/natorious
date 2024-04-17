namespace natorious {
    /**
     * A namespace for text-related operations.
     */
    export namespace text {
        /**
         * A collection of text modification utilities.
         */
        export const modify = {
            /**
             * Truncates a string while considering word boundaries.
             * 
             * @param text The input string to truncate.
             * @param length The maximum length of the output string.
             * @param end The string to append at the end if truncated.
             * @returns The truncated string.
             */
            trimString: (text: string, length: number = 10, end: string = '...'): string => {
                if (text.length <= length) return text;

                const words = text.split(' ');
                let truncatedText = '';
                let currentLength = 0;

                for (const word of words) {
                    if (currentLength + word.length + end.length > length) break;
                    truncatedText += word + ' ';
                    currentLength += word.length + 1;
                }

                return truncatedText.trim() + end;
            }
        };
    }
}
