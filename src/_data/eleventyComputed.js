module.exports = {
    eleventyNavigation: {
        key: data => data.key,
        title: data => data.title,
        alternativetitle: data => data.alternativetitle,
        parent: data => data.parent,
        order: data => data.order,
        url: data => data.url,
        redirect: data => data.redirect,
        image: data => data.image,
        keywords: data => data.keywords,
        external: data => data.external,
        hideInNavigation: data => data.hideInNavigation
    }
  };