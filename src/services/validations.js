// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const under_eight_char = (label) => {
    if (label.length < 8) {
        return true;
    } else {
        return false;
    }
};

exports.under_eight_char = under_eight_char;
exports.isEmpty = isEmpty;
