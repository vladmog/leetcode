/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {

    // Iterate
    for (let i = 0; i < S.length; i++){
        let cutStart
        let cutEnd
        let toCut = false

        // Check for duplicate
        if (S[i] === S[i + 1]){
            // If found, store start and end indices of duplicate
            let dupsFound = 1
            cutStart = i
            cutEnd = i + 1
            toCut = true
            
            // Define adjacent indices for further duplicate check
            let nextCutStart = cutStart - 1
            let nextCutEnd = cutEnd + 1

            // If adjacent indices are also duplicates, further expand duplicate indices
            while((S[nextCutStart] === S[nextCutEnd]) && nextCutStart >= 0 ){
                cutStart = nextCutStart
                cutEnd = nextCutEnd
                nextCutStart --
                nextCutEnd ++
                dupsFound ++
            }

            // Decrement iteration step by number of duplicates removed
            i -= dupsFound
        }

        // Cut out duplicates and continue iterating
        if (toCut) {
            S = S.substring(0, cutStart) + S.substring(cutEnd+1)
            // S = S.replace(S.substring(cutStart, cutEnd + 1), "");
            toCut = false
        }
    }
    return S
};