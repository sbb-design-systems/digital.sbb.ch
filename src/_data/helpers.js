module.exports = {
    /**
     * Returns some attributes based on whether the link is active or
     * a parent of an active item
     *
     * @param {String} itemUrl is the link in question
     * @param {String} pageUrl is the page context
     * @returns {String} is the attributes or empty
     */
    getLinkActiveState(itemUrl, pageUrl) {
        let response = '';
        if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
            response += ' class="sbb-active" ';
        }
        return response;
    }
    
    /*
    ,

    getLinkActiveState2(itemUrl, pageUrl) {
        let response = '';

        let splitsItemUrl = itemUrl.split("/").at(-2);
        let splitsPageUrl = pageUrl.split("/").at(-3);

        console.log(splitsItemUrl +": "+splitsPageUrl);

        if (splitsItemUrl == splitsPageUrl) {
            response += ' class="sbb-active" ';
        }

        
        if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
            response += ' class="sbb-active" ';
        }
        
        return response;
    }
    */
};