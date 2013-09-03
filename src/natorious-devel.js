var natorious = natorious || {};

// truncate long group labels taking into account word boundries
natorious.trimString = function(text, length, end){



    var out = '',
        tLength = length || 10,
        cLength = text.length,
        wrd,
        wrdCount,
        e = end || '...',
        eLength = e.length;

    // if the string fits in our limit return the whole thing
    if (tLength >= cLength) return text;

    // if the string is one very long word that excedes our limit
    // truncate and return with ellipsis
    if (text.indexOf(' ') == -1) return (text.substr(0,tLength-eLength) + e);

    // split string to words
    wrd = text.split(' ');
    wrdCount = wrd.length;

    // if the first word in too long for the limit
    // truncate and return with ellipsis
    if(wrd[0].length > tLength) return (wrd[0].substr(0,tLength-eLength) + e);


    // try adding the next word to see if it fits
    // if not return existing output with ellipsis
    // if not add the word and continue to the next
    for ( var i = 0; i < wrdCount; ++i) {
        if( out.length + wrd[i].length >= tLength) return (out.substr(0,out.length-1) + e);
        out += wrd[i] + ' ';
    }

    return text;

};
