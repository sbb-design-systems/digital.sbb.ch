
## What does the component do?
The image component displays an image. It preferably loads images from the SBB Image CDN and delivers them in a suitable size for the respective device.

## When should the component be used?
* To visually support and complement content.
* To present complex information or data graphically.
* To create a mood.

## Rules.
* Images are of high quality and have an appropriate resolution.
* Informative images have a descriptive alt text. Decorative images have an empty alt text or are hidden from screen readers.
* Images are responsive and adapt to different screen sizes.
* Images outside the visible area are loaded lazily (lazy loading) to reduce load time.
* An image with a caption or chip label is placed together with it in a `figure` element.
* The predefined utility classes are used for aspect ratio and corner radius.
* Image rights must be cleared.
