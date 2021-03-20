/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let altitude = 0;
    let highest = 0;
    for (let i = 0; i < gain.length; i++){
        altitude += gain[i]
        if (altitude > highest) {
            highest = altitude
        }
    }
    return highest
};

