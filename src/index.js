const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const y = d * 365.25;

function getScales(time, isNegative) {
    const scales = [];
    const values = [];
    for(let i = isNegative ? 1 : 0, scalesCounter = 0, valuesCounter = 0; i < time.length; i++) {
        if(isNaN(Number(time[i]))) {
            if (time[i] === ".") {
                values[valuesCounter - 1] += time[i];
            } else if(i > 0 && isNaN(Number(time[i - 1]))) {
                scales[scalesCounter - 1] += time[i].toLowerCase();
            } else {
                scalesCounter++;
                scales.push(time[i].toLowerCase());
            }
        } else if (!isNaN(Number(time[i]))) {
            const prev = time[i - 1];
            const prevIsValidNumber = !isNaN(prev);
            if(i > 0 && prevIsValidNumber || prev === ".") {
                values[valuesCounter - 1] += time[i];
            } else {
                valuesCounter++;
                values.push(time[i]);
            }
        }
    }
    // In case of ms be ommited - 10s10 should be resolved as 10 seconds and 10 milliseconds
    if(values.length > scales.length) scales.push("ms");
    return [scales, values];
}

function convertScalesToMil(scales, values, isNegative) {
    let res = 0;
    if (scales.length > 0) {
        for(let i = 0; i < scales.length; i++) {
            switch(scales[i]) {
                case 'milliseconds':
                case 'millisecond':
                case 'msecs':
                case 'msec':
                case 'ms':
                    res += 1 * values[i];
                    break;
                case 'seconds':
                case 'second':
                case 'secs':
                case 'sec':
                case 's':
                    res += s * values[i];
                    break;
                case 'minutes':
                case 'minute':
                case 'mins':
                case 'min':
                case 'm':
                    res += m * values[i];
                    break;
                case 'hours':
                case 'hour':
                case 'hrs':
                case 'hr':
                case 'h':
                    res += h * values[i];
                    break;
                case 'days':
                case 'day':
                case 'd':
                    res += d * values[i];
                    break;
                case 'weeks':
                case 'week':
                case 'w':
                    res += w * values[i];
                    break;
                case 'years':
                case 'year':
                case 'yrs':
                case 'yr':
                case 'y':
                    res += y * values[i];
                    break;
                default:
                    console.error("unknown unit");
                    throw new Error("unknown unit");
            }
        }
    } else {
        res = Number(values[0]);
    }
    return isNegative ? -res : res;
}

function asString(time) {
    const timeAbs = Math.abs(time);

    if (timeAbs >= y) {
        return `${Math.round(timeAbs / y)}y`
    }

    if (timeAbs >= d) {
        return `${Math.round(timeAbs / d)}d`
    }
    
    if (timeAbs >= h) {
        return `${Math.round(timeAbs / h)}h`
    }
    
    if (timeAbs >= m) {
        return `${Math.round(timeAbs / m)}m`
    }

    if(timeAbs >= s) {
        return `${Math.round(timeAbs / s)}s`
    }

    return `${Math.round(timeAbs)}ms`
}

/**
 * Parse val to milliseconds
 *
 *
 * @param {String|Number} time
 * @throws {Error} throw an error if val is an empty string or is not a number
 * @return {String|Number}
 */
function millit(time) {
    if(!time) {
        throw new Error("time isn't string nor number");
    }
    const isNegative = time[0] === "-";
    let res;
    if(typeof time === "string") {
        const [scales, values] = getScales(time, isNegative);
        res = convertScalesToMil(scales, values, isNegative);
        return Number(res);
    } else if(typeof time === "number")  {
        res = asString(time);
        return res;
    }
    throw new Error("time isn't string nor number");
}

module.exports = millit;