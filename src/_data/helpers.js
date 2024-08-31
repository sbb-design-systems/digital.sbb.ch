module.exports = {
    /**
     * Returns some attributes based on whether the link is active or
     * a parent of an active item
     *
     * @param {String} itemUrl is the link in question
     * @param {String} pageUrl is the page context
     * @returns {String} is the attributes or empty
     */
    getLinkActiveState(itemUrl, pageUrl, topLevel) {
        let response = '';
        let result = itemUrl;
        if (topLevel) {
            result = itemUrl.substring(0, itemUrl.lastIndexOf('/') + 1);
        } else {
        }
        if (result.length > 1 && pageUrl.indexOf(result) === 0) {
            response += ' class="sbb-active" ';
        }
        return response;
    }
    

};